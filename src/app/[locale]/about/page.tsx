import Image from "next/image";
import { getTranslations } from 'next-intl/server';

const HERO_IMAGE = "/banner_about.png";

export default async function About() {
    const t = await getTranslations('About');

    return (
        <div className="flex flex-col bg-white">
            {/* Header */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={HERO_IMAGE}
                        alt="About POLYCOAT"
                        fill
                        className="object-cover brightness-[0.45] scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <div className="container mx-auto px-8 md:px-16 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-4 block reveal-up stagger-1">Corporate Profile</span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter reveal-up stagger-2">{t('title')}</h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">{t('title')}</h2>
                                <div className="w-12 h-1.5 bg-secondary mb-8"></div>
                                <p className="text-muted font-light leading-relaxed uppercase tracking-[0.1em] text-xs">
                                    Professional Marketing & Distribution globally since 2005.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <article className="prose prose-2xl prose-slate max-w-none">
                                <p className="text-2xl text-primary font-medium leading-[1.6] mb-12">
                                    {t('content')}
                                </p>
                            </article>

                            <div className="mt-32 pt-24 border-t border-border">
                                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-8 block">{t('productRange.title')}</span>
                                <h3 className="text-3xl font-bold text-primary mb-12 tracking-tight">Diverse Distribution Portfolio</h3>
                                <div className="bg-slate-50 p-12 md:p-20 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                                    <p className="text-lg text-primary/70 leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                                        {t('productRange.content')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we're great at - Grid with numbered cards */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-border/20 -skew-x-12 transform translate-x-1/2"></div>

                <div className="container mx-auto px-8 md:px-16 relative z-10">
                    <div className="max-w-2xl mb-24">
                        <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-6 block">Our Core</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">{t('expertiseSection.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-border shadow-premium overflow-hidden rounded-2xl">
                        {t.raw('expertiseSection.items').map((item: any, i: number) => (
                            <div key={i} className="bg-white p-16 group hover:bg-primary transition-all duration-700">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-3xl group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                                        {i === 0 ? '🏆' : i === 1 ? '✨' : '🌍'}
                                    </div>
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-white/5 transition-colors leading-none">0{i + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-white transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors font-light italic">
                                    "{item.content}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
