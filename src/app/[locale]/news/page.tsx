import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default async function News() {
    const t = await getTranslations('News');

    return (
        <div className="flex flex-col bg-white min-h-screen">
            {/* Header Banner - Editorial Style */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/banner_news_v2.png"
                        alt="Corporate Intelligence"
                        fill
                        className="object-cover brightness-[0.45]"
                        priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 md:px-16 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-secondary font-black text-[10px] tracking-[0.6em] uppercase mb-4 block reveal-up">{t('subHeader')}</span>
                        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter reveal-up stagger-1">{t('title')}</h1>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 md:px-16">
                    <div className="space-y-40">
                        {Object.values(t.raw('posts')).map((post: any, index: number) => (
                            <div key={post.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
                                <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-premium group">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-8 left-8">
                                        <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">{post.date}</span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">{post.title}</h2>
                                    <div className="w-20 h-1 bg-secondary mb-8"></div>
                                    <div className="text-muted leading-relaxed font-light text-lg space-y-6">
                                        {post.content.split('\n\n').slice(0, 2).map((para: any, i: number) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                    <div className="mt-12">
                                        <Link href={`/news/${post.id}`} className="inline-flex items-center space-x-4 text-primary font-black uppercase text-[11px] tracking-[0.2em] group">
                                            <span>{t('readFullStory')}</span>
                                            <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
