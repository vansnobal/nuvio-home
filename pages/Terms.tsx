
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../context/LanguageContext';

const Terms: React.FC = () => {
    const { t } = useTranslation();
    const sections = t('terms.sections') as any[];

    return (
        <div className="min-h-screen bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 text-[#2D2D2D] dark:text-[#E2E0D8] whitespace-pre-line">{t('terms.title')}</h1>
                <div className="prose dark:prose-invert max-w-none text-[#4B5563] dark:text-[#9CA3AF]">
                    <p className="mb-8 whitespace-pre-line">
                        {t('terms.intro')}
                    </p>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <section key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-2xl shadow-sm border border-[#E2E0D8] dark:border-[#2D2D2D]">
                                <h2 className="text-2xl font-semibold mb-4 text-[#2D2D2D] dark:text-[#E2E0D8]">{section.title}</h2>
                                {section.content && <p className="mb-2">{section.content}</p>}
                                {section.items && (
                                    <ol className="list-decimal pl-5 space-y-2">
                                        {section.items.map((item: string, itemIndex: number) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ol>
                                )}
                            </section>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-gray-500 whitespace-pre-line">
                        {t('terms.date')}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
