import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';

const HERO_IMAGE = "/hero_corporate.webp";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Home');
  const tNews = await getTranslations('News');

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="POLYCOAT Company"
            fill
            className="object-cover brightness-[0.45] scale-105"
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="reveal-up stagger-1 mb-8">
              <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                {t('heroTitle').split(' ').map((word: string, i: number) => (
                  <span key={i} className={word.toUpperCase() === 'POLYCOAT' ? 'text-secondary block' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal-up stagger-2">
              <Link
                href="/about"
                className="group relative px-12 py-5 bg-secondary text-white font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-16"
              >
                <span className="relative z-10">{t('learnMore')}</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
              </Link>

              <div className="flex items-center space-x-4 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-px bg-white/30"></div>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest italic">{t('globalPartners')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative z-20 -mt-12 container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-premium">
          {t.raw('stats').map((stat: string, i: number) => {
            const icons = [
              <svg key="0" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-6 text-secondary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              <svg key="1" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-6 text-secondary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>,
              <svg key="2" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-6 text-secondary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>,
              <svg key="3" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-6 text-secondary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            ];
            return (
              <div key={i} className="bg-white p-12 flex flex-col items-center justify-center text-center group hover:bg-primary transition-colors duration-500">
                {icons[i]}
                <span className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase mb-4 opacity-60">0{i + 1}</span>
                <p className="text-primary font-bold text-sm tracking-tight leading-snug group-hover:text-white transition-colors uppercase">{stat}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Us Section - Premium Editorial Layout */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="hidden lg:block lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-[300px] lg:h-[650px] w-full reveal-scale group">
                <Image
                  src="/banner_about.webp"
                  alt="About POLYCOAT"
                  fill
                  className="object-cover rounded-sm transition-all duration-1000"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 -z-10 rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="inline-block text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-4 md:mb-8 border-b border-secondary/30 pb-2">{t('definingExcellence')}</span>
              <h2 className="text-4xl md:text-7xl font-bold text-primary mb-6 md:mb-10 leading-[1.1]">
                {t('aboutSection.title')}
              </h2>
              <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
                <p className="text-xl text-primary/80 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                  {t('aboutSection.content').substring(0, 160)}...
                </p>
                <p className="text-muted leading-relaxed">
                  {t('aboutSection.content').substring(160)}
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center space-x-6 text-primary font-black uppercase text-[11px] tracking-[0.3em] group">
                <span>{t('discovery')}</span>
                <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Premium Corporate Elegance (Light) */}
      <section className="py-16 md:py-40 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c92121 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/[0.03] to-transparent"></div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12 md:mb-32 gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-6 reveal-up">
                <span className="w-8 h-px bg-secondary"></span>
                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase">{t('enterpriseStrategy')}</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-primary tracking-tight leading-none reveal-up">
                {t('expertiseSection.title')}
              </h2>
            </div>
            <div className="lg:max-w-xs text-primary/60 text-sm font-light leading-relaxed border-l border-primary/10 pl-8 reveal-up stagger-1">
              {t('strategyDesc')}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {t.raw('expertiseSection.items').map((item: any, i: number) => {
              const icons = [
                <svg key="0" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>,
                <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>,
                <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ];
              return (
                <div key={i} className="group relative">
                  <div className="absolute -inset-4 bg-primary/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/[0.05] border border-secondary/10 flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                      {icons[i]}
                    </div>
                    <span className="text-[10px] font-black text-primary/20 tracking-[0.3em] uppercase mb-4">Phase 0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">{item.title}</h3>
                    <p className="text-primary/60 text-base leading-relaxed font-light">
                      {item.content}
                    </p>
                    <div className="mt-auto pt-10">
                      <div className="h-px w-8 bg-secondary/30 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest News Footer - Refined Grid */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
            <div className="max-w-xl">
              <span className="text-secondary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">{t('News.updates')}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">{t('newsTitle')}</h2>
            </div>
            <Link href="/news" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary border-b-2 border-secondary pb-2 mt-8 md:mt-0">{t('News.viewAll')}</Link>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {Object.values(tNews.raw('posts')).map((post: any) => (
              <Link key={post.id} href={`/news/${post.id}`} className="group cursor-pointer">
                <div className="relative h-80 w-full overflow-hidden mb-8 shadow-premium">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary/90 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-3 py-1">{post.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <div className="w-10 h-px bg-secondary mt-6 transform origin-left group-hover:w-full transition-all duration-700"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
