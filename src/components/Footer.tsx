"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
    const navT = useTranslations("Navbar");

    return (
        <footer className="bg-primary pt-32 pb-16 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0 opacity-20"></div>

            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center space-x-4 group mb-12">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <img src="/logo.png" alt="POLYCOAT Logo" className="w-full h-full object-contain brightness-0 invert" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight text-white leading-none">
                                    POLYCOAT
                                </span>
                                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 leading-none mt-1">
                                    Wholesalers L.L.C.
                                </span>
                            </div>
                        </Link>
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-sm mb-12 italic border-l-2 border-secondary/20 pl-8">
                            {t("description")}
                        </p>
                        <div className="flex space-x-6">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-primary transition-all cursor-pointer">LN</div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-primary transition-all cursor-pointer">FB</div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-primary transition-all cursor-pointer">IG</div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10">{t("navigation")}</h4>
                        <ul className="space-y-6">
                            <li><Link href="/" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("home")}</Link></li>
                            <li><Link href="/about" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("about")}</Link></li>
                            <li><Link href="/news" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("news")}</Link></li>
                            <li><Link href="/contact" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">{navT("contact")}</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10">Intelligence</h4>
                        <ul className="space-y-6">
                            <li className="text-white/50 text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:text-white">Partners</li>
                            <li className="text-white/50 text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:text-white">Logistics</li>
                            <li className="text-white/50 text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:text-white">CSR</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10">{t("contactInfo")}</h4>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">Location</span>
                                <p className="text-white/70 text-sm font-light">Deira – Dubai, UAE</p>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">Direct Line</span>
                                <p className="text-white/70 text-sm font-light">+917 4 325 2274</p>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="text-white/30 text-[9px] uppercase tracking-widest mb-1 italic">Electronic Support</span>
                                <p className="text-white/70 text-sm font-light">info@polycoatwholesalers.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">
                        {t("copyright", { year: new Date().getFullYear() })}
                    </div>
                    <div className="flex items-center space-x-8 opacity-20">
                        <span className="text-[9px] text-white uppercase tracking-widest font-black">ISO 9001</span>
                        <span className="text-[9px] text-white uppercase tracking-widest font-black">Trade Compliance</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
