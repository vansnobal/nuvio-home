
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../context/LanguageContext';

const Privacy: React.FC = () => {
    const { t } = useTranslation();
    const sections = t('privacy.sections') as any[];

    const renderContent = (content: string, linkText?: string) => {
        if (!content) return null;
        if (!linkText) return content;
        const parts = content.split('{link}');
        if (parts.length === 1) return content;
        return (
            <>
                {parts[0]}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {linkText}
                </a>
                {parts[1]}
            </>
        );
    };

    return (
        <div className="min-h-screen bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 text-[#2D2D2D] dark:text-[#E2E0D8] whitespace-pre-line">{t('privacy.title')}</h1>
                <div className="prose dark:prose-invert max-w-none text-[#4B5563] dark:text-[#9CA3AF]">
                    <p className="mb-8 whitespace-pre-line">
                        {t('privacy.intro')}
                    </p>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <section key={index} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-2xl shadow-sm border border-[#E2E0D8] dark:border-[#2D2D2D]">
                                <h2 className="text-2xl font-semibold mb-4 text-[#2D2D2D] dark:text-[#E2E0D8]">{section.title}</h2>

                                {section.subsections ? (
                                    <div className="space-y-4">
                                        {section.subsections.map((sub: any, subIndex: number) => (
                                            <div key={subIndex}>
                                                <h3 className="font-semibold text-lg text-[#2D2D2D] dark:text-[#E2E0D8]">{sub.title}</h3>
                                                {sub.content && <p>{sub.content}</p>}
                                                {sub.items && (
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        {sub.items.map((item: string, itemIndex: number) => (
                                                            <li key={itemIndex}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        {section.content && <p className="mb-4">{renderContent(section.content, section.linkText)}</p>}

                                        {section.items && (
                                            <ul className="list-disc pl-5 space-y-2">
                                                {section.items.map((item: string, itemIndex: number) => (
                                                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item.replace('>', '&gt;') }} />
                                                ))}
                                            </ul>
                                        )}

                                        {section.calendarData && <p>{section.calendarData}</p>}

                                        {section.manager && (
                                            <div className="bg-[#F8F7F2] dark:bg-[#2D2D2D] p-4 rounded-lg mt-4">
                                                <p><strong>{section.manager}</strong></p>
                                                <p><strong>{section.email}</strong></p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </section>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-gray-500 whitespace-pre-line">
                        {t('privacy.date')}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
