"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const t = useTranslations("Navbar");
    const locale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about" },
        { name: t("news"), href: "/news" },
        { name: t("contact"), href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "py-3 glass-morphism shadow-premium"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-8 md:px-16 flex justify-between items-center text-primary">
                <Link href="/" className="flex items-center space-x-4 group">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <img src="/logo.png" alt="POLYCOAT Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-black tracking-tight leading-none ${isScrolled ? "text-primary" : "text-white"}`}>
                            POLYCOAT
                        </span>
                        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase opacity-60 leading-none mt-1 ${isScrolled ? "text-primary" : "text-white"}`}>
                            Wholesalers L.L.C.
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-12">
                    <div className="flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group
                  ${pathname === link.href
                                        ? "text-secondary"
                                        : isScrolled ? "text-primary/70 hover:text-primary" : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full 
                  ${pathname === link.href ? "w-full" : "w-0"}`}></span>
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-current opacity-10 mx-2"></div>

                    <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-3">
                            {['en', 'tr'].map((l) => (
                                <Link
                                    key={l}
                                    href={pathname}
                                    locale={l}
                                    className={`text-[11px] font-bold uppercase tracking-tighter transition-all px-2 py-1 rounded
                      ${locale === l
                                            ? "bg-secondary text-white"
                                            : isScrolled ? "text-primary/40 hover:text-primary" : "text-white/40 hover:text-white"}`}
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className={`px-7 py-3 rounded text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-500 hover:shadow-lg
                  ${isScrolled
                                    ? "bg-primary text-white hover:bg-secondary"
                                    : "bg-white text-primary hover:bg-secondary hover:text-white"
                                }`}
                        >
                            {t("cta")}
                        </Link>
                    </div>
                </div>

                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
