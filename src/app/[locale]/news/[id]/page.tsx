import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";

import ShareButton from "@/components/ShareButton";

export default async function NewsDetail({
    params
}: {
    params: Promise<{ locale: string, id: string }>;
}) {
    const { locale, id } = await params;
    const t = await getTranslations({ locale, namespace: 'News' });
    const posts: any = t.raw('posts');
    const post = posts[id];

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover brightness-[0.45]"
                        priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 md:px-16 relative z-10 text-center">
                    <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full mb-8 inline-block reveal-up">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-8 reveal-up stagger-1">{post.title}</h1>
                    <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs reveal-up stagger-2">{post.date}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-8 mb-16 pb-12 border-b border-border">
                            <Link href="/news" className="flex items-center space-x-3 text-primary/40 hover:text-secondary transition-colors group">
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-secondary">←</div>
                                <span className="text-[10px] font-black uppercase tracking-widest">{t('backToNews')}</span>
                            </Link>
                        </div>

                        <div className="prose prose-xl prose-slate max-w-none">
                            <div className="text-muted leading-[1.8] font-light text-xl space-y-10 whitespace-pre-wrap">
                                {post.content}
                            </div>
                        </div>

                        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-12">
                            <ShareButton />

                            <Link href="/contact" className="px-10 py-4 bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-500">
                                {t('discussStrategy')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
