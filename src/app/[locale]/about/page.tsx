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
                <div className="container mx-auto px-4 md:px-16 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-4 block reveal-up stagger-1">{t('expertiseSection.profileHeader')}</span>
                        <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter reveal-up stagger-2">{t('title')}</h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">{t('title')}</h2>
                                <div className="w-12 h-1.5 bg-secondary mb-8"></div>
                                <p className="text-muted font-light leading-relaxed uppercase tracking-[0.1em] text-xs">
                                    {t('expertiseSection.profileSubHeader')}
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
                                <h3 className="text-3xl font-bold text-primary mb-12 tracking-tight">{t('expertiseSection.portfolioTitle')}</h3>
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

                <div className="container mx-auto px-4 md:px-16 relative z-10">
                    <div className="max-w-2xl mb-24">
                        <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-6 block">{t('expertiseSection.core')}</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">{t('expertiseSection.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {t.raw('expertiseSection.items').map((item: any, i: number) => {
                            const icons = [
                                <svg key="0" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
                                <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"></path></svg>,
                                <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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
        </div>
    );
}
