const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { join } = require('path');
const { existsSync, readFileSync } = require('fs');
const { promisify } = require('util');
const zlib = require('zlib');
const net = require('net');

const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);

// Basit bir önbellek yapısı
const cache = new Map();
const CACHE_MAX_AGE = 60 * 60 * 24 * 7; // 7 gün (saniye cinsinden)

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.IP || 'localhost';

// Boş port bulma fonksiyonu
function findAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${startPort} is in use, trying next port...`);
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });
    server.listen(startPort, () => {
      server.close(() => {
        console.log(`Found available port: ${startPort}`);
        resolve(startPort);
      });
    });
  });
}

// Next.js uygulamasını başlat
async function startServer() {
  try {
    console.log('Starting server...');
    console.log('Environment:', process.env.NODE_ENV);
    
    // Boş port bul
    const port = await findAvailablePort(parseInt(process.env.PORT || '4806', 10));
    console.log('Using port:', port);
    
    const app = next({ dev, hostname, port });
    const handle = app.getRequestHandler();

    console.log('Preparing Next.js app...');
    await app.prepare();
    console.log('Next.js app prepared successfully');
    
    createServer(async (req, res) => {
      try {
        // URL'yi ayrıştır
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        
        // Statik dosya isteklerini özel olarak işle
        if (pathname.startsWith('/images/') || 
            pathname.includes('.jpg') || 
            pathname.includes('.png') || 
            pathname.includes('.svg') || 
            pathname.includes('.avif') || 
            pathname.includes('.webp')) {
          
          const filePath = join(__dirname, 'public', pathname);
          
          if (existsSync(filePath)) {
            // Önbellekte var mı kontrol et
            if (cache.has(pathname)) {
              const cachedData = cache.get(pathname);
              res.setHeader('Content-Type', cachedData.contentType);
              res.setHeader('Cache-Control', `public, max-age=${CACHE_MAX_AGE}`);
              
              // Client'ın desteklediği sıkıştırma yöntemlerini kontrol et
              const acceptEncoding = req.headers['accept-encoding'] || '';
              
              if (/br/.test(acceptEncoding) && cachedData.brotli) {
                res.setHeader('Content-Encoding', 'br');
                res.end(cachedData.brotli);
              } else if (/gzip/.test(acceptEncoding) && cachedData.gzip) {
                res.setHeader('Content-Encoding', 'gzip');
                res.end(cachedData.gzip);
              } else {
                res.end(cachedData.original);
              }
              return;
            }
            
            const img = readFileSync(filePath);
            let contentType = 'image/jpeg'; // Varsayılan
            
            if (pathname.endsWith('.png')) contentType = 'image/png';
            else if (pathname.endsWith('.svg')) contentType = 'image/svg+xml';
            else if (pathname.endsWith('.avif')) contentType = 'image/avif';
            else if (pathname.endsWith('.webp')) contentType = 'image/webp';
            
            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', `public, max-age=${CACHE_MAX_AGE}`);
            
            // Önbellek yapısını hazırla
            const cacheData = {
              contentType,
              original: img
            };
            
            // Sıkıştırma yöntemlerini destekleyen client ise sıkıştırma uygula
            const acceptEncoding = req.headers['accept-encoding'] || '';
            
            // Asenkron olarak sıkıştırma işlemleri başlat, ancak response'u bekletme
            if (/br/.test(acceptEncoding)) {
              // İstemci brotli destekliyorsa brotli sıkıştırma uygula
              res.setHeader('Content-Encoding', 'br');
              
              // Paralel olarak gzip ve brotli önbelleğe alınacak
              Promise.all([
                brotliCompress(img).then(compressed => {
                  cacheData.brotli = compressed;
                  return compressed;
                }),
                gzip(img).then(compressed => {
                  cacheData.gzip = compressed;
                })
              ]).then(([brotliData]) => {
                cache.set(pathname, cacheData);
                res.end(brotliData);
              }).catch(err => {
                console.error('Sıkıştırma hatası:', err);
                res.end(img);
              });
            } else if (/gzip/.test(acceptEncoding)) {
              // İstemci sadece gzip destekliyorsa
              res.setHeader('Content-Encoding', 'gzip');
              
              Promise.all([
                gzip(img).then(compressed => {
                  cacheData.gzip = compressed;
                  return compressed;
                }),
                brotliCompress(img).then(compressed => {
                  cacheData.brotli = compressed;
                })
              ]).then(([gzipData]) => {
                cache.set(pathname, cacheData);
                res.end(gzipData);
              }).catch(err => {
                console.error('Sıkıştırma hatası:', err);
                res.end(img);
              });
            } else {
              // İstemci hiçbir sıkıştırma yöntemini desteklemiyorsa
              // Yine de gelecekteki istekler için önbelleğe sıkıştırılmış versiyonları al
              Promise.all([
                gzip(img).then(compressed => {
                  cacheData.gzip = compressed;
                }),
                brotliCompress(img).then(compressed => {
                  cacheData.brotli = compressed;
                })
              ]).then(() => {
                cache.set(pathname, cacheData);
              }).catch(err => {
                console.error('Sıkıştırma hatası:', err);
              });
              
              // Beklemeden orijinal resmi gönder
              res.end(img);
            }
            return;
          }
        }

        // Next.js ile talepleri işle
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Request handling error:', err);
        res.statusCode = 500;
        res.end('Internal server error');
      }
    }).listen(port, (err) => {
      if (err) {
        console.error('Server listen error:', err);
        process.exit(1);
      }
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

// Hata yakalama
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

startServer(); 