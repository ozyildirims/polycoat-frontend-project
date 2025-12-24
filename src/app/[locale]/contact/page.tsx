import { getTranslations } from 'next-intl/server';
import Image from "next/image";

export default async function Contact() {
    const t = await getTranslations('Contact');

    return (
        <div className="flex flex-col bg-white">
            {/* Header Banner - Standardized Size */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/banner_contact_v2.webp"
                        alt="Contact POLYCOAT"
                        fill
                        className="object-cover brightness-50"
                        priority
                        quality={75}
                        sizes="100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 md:px-16 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-secondary font-black text-[10px] tracking-[0.6em] uppercase mb-4 block reveal-up">{t('getSubHeader')}</span>
                        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter reveal-up stagger-1">{t('title')}</h1>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        <div className="glass-morphism p-12 rounded-3xl border border-border hover-lift">
                            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-8 block">{t('locationLabel')}</span>
                            <h3 className="text-2xl font-bold text-primary mb-6">{t('headquarters')}</h3>
                            <p className="text-muted leading-relaxed font-light">
                                {t('location')}
                            </p>
                        </div>

                        <div className="glass-morphism p-12 rounded-3xl border border-border hover-lift shadow-glass">
                            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-8 block">{t('contactUs')}</span>
                            <h3 className="text-2xl font-bold text-primary mb-6">{t('directChannels')}</h3>
                            <div className="space-y-4">
                                <p className="text-xl font-medium text-primary">{t('phone1')}</p>
                                <p className="text-xl font-medium text-primary">{t('phone2')}</p>
                                <p className="text-primary/60 font-light pt-4">info@polycoatco.com</p>
                            </div>
                        </div>

                        <div className="glass-morphism p-12 rounded-3xl border border-border hover-lift">
                            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-8 block">{t('hoursLabel')}</span>
                            <h3 className="text-2xl font-bold text-primary mb-6">{t('operatingHours')}</h3>
                            <p className="text-muted font-medium mb-2">{t('hours')}</p>
                            <p className="text-muted/60 text-sm font-light italic">{t('availability')}</p>
                        </div>

                    </div>

                    <div className="mt-32 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-premium grayscale hover:grayscale-0 transition-all duration-1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.9447311533727!2d55.30551708885745!3d25.2743036198691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434c3347cb1b%3A0x3ac3db03e635c243!2sAl%20UTHMAN%20BUILDING!5e0!3m2!1str!2str!4v1766341065411!5m2!1str!2str"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
