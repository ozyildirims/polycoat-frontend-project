"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
    const navT = useTranslations("Navbar");

    return (
        <footer className="bg-primary pt-32 pb-16 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0 opacity-20"></div>

            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center group mb-12">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <img src="/logo.png" alt="POLYCOAT Logo" className="w-full h-full object-contain brightness-0 invert" />
                            </div>
                        </Link>
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-sm mb-12 italic border-l-2 border-secondary/20 pl-8">
                            {t("description")}
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10">{t("navigation")}</h4>
                        <ul className="space-y-6">
                            <li><Link href="/" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("home")}</Link></li>
                            <li><Link href="/about" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("about")}</Link></li>
                            <li><Link href="/news" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("news")}</Link></li>
                            <li><Link href="/contact" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("contact")}</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10">{t("contactInfo")}</h4>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">{t('location')}</span>
                                <p className="text-white/70 text-sm font-light">Alothman Building Eyal Nasser 5 Floor No.-M01 Deira – Dubai</p>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">{t('directLine')}</span>
                                <p className="text-white/70 text-sm font-light">+917 58 578 7302</p>
                                <p className="text-white/70 text-sm font-light">+917 4 325 2274</p>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">{t('electronicSupport')}</span>
                                <p className="text-white/70 text-sm font-light">info@polycoatco.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">
                        {t("copyright", { year: new Date().getFullYear() })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
