"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // Close mobile menu on path change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about" },
        { name: t("news"), href: "/news" },
        { name: t("contact"), href: "/contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                    ? "py-3 glass-morphism shadow-premium bg-white/95 backdrop-blur-md"
                    : "py-6 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-16 flex justify-between items-center text-primary">
                    <Link href="/" className="flex items-center group relative z-50">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                            <img src="/logo.png" alt="POLYCOAT Logo" className={`w-full h-full object-contain ${!isScrolled && !isMobileMenuOpen ? "brightness-0 invert md:filter-none" : ""}`} />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
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

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 flex flex-col items-end space-y-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2 text-primary" : `w-6 ${isScrolled ? "text-primary" : "text-white"}`}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 text-primary" : `w-4 ${isScrolled ? "text-primary" : "text-white"}`}`}></span>
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2 text-primary" : `w-5 ${isScrolled ? "text-primary" : "text-white"}`}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-8 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex flex-col space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-3xl font-black uppercase tracking-tight ${pathname === link.href ? "text-secondary" : "text-primary"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-12 pt-12 border-t border-border">
                    <div className="flex items-center space-x-6 mb-8">
                        {['en', 'tr'].map((l) => (
                            <Link
                                key={l}
                                href={pathname}
                                locale={l}
                                className={`text-sm font-bold uppercase tracking-widest px-4 py-2 rounded ${locale === l ? "bg-secondary text-white" : "bg-slate-100 text-primary"}`}
                            >
                                {l}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/contact"
                        className="block w-full text-center py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t("cta")}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
