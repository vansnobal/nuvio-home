import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from '../context/LanguageContext';
import { Search, Calendar, FileText, CheckSquare, GanttChartSquare } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
    search: Search,
    calendar: Calendar,
    note: FileText,
    todo: CheckSquare,
    timeline: GanttChartSquare
};

const Guide: React.FC = () => {
    const { t } = useTranslation();
    const sections = t('guide.sections', { returnObjects: true }) as any[];

    return (
        <div className="min-h-screen bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 text-[#2D2D2D] dark:text-[#E2E0D8] whitespace-pre-line">{t('guide.title')}</h1>
                <div className="prose dark:prose-invert max-w-none text-[#4B5563] dark:text-[#9CA3AF]">
                    <p className="mb-4 whitespace-pre-line">
                        {t('guide.intro')}
                    </p>

                    <hr className="my-8 border-[#E2E0D8] dark:border-[#2D2D2D]" />

                    {sections.map((section, index) => (
                        <div key={index}>
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D] dark:text-[#E2E0D8]">{section.title}</h2>
                                {section.intro && <p className="mb-6 whitespace-pre-line">{section.intro}</p>}
                                {section.content && <p className="mb-4 whitespace-pre-line">{section.content}</p>}

                                {section.subsections && section.subsections.map((sub: any, subIndex: number) => {
                                    const IconComponent = sub.icon ? iconMap[sub.icon] : null;
                                    return (
                                        <div key={subIndex} className="mb-8">
                                            <div className="flex items-center gap-2 mb-3">
                                                {IconComponent && <IconComponent className="w-6 h-6 text-[#3C4A57] dark:text-[#D1D5DB]" />}
                                                <h3 className="text-xl font-semibold text-[#3C4A57] dark:text-[#D1D5DB]">{sub.title}</h3>
                                            </div>
                                            {sub.content && <p className="mb-2 whitespace-pre-line">{sub.content}</p>}

                                            {sub.alert && (
                                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-4 mt-2">
                                                    <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">{sub.alert.title}</p>
                                                    <p className="text-sm whitespace-pre-line">{sub.alert.content}</p>
                                                </div>
                                            )}

                                            {sub.items && (
                                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                                    {sub.items.map((item: string, itemIndex: number) => (
                                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                                    ))}
                                                </ul>
                                            )}

                                            {sub.codeExample && (
                                                <div className="bg-[#F1EFE7] dark:bg-[#1E1E1E] p-4 rounded-lg mt-4 font-mono text-sm border border-[#E2E0D8] dark:border-[#2D2D2D]">
                                                    <p className="mb-2 text-xs text-gray-500">Input Format:</p>
                                                    <pre className="whitespace-pre-wrap mb-4">{sub.codeExample.format}</pre>
                                                    <p className="mb-2 text-xs text-gray-500">Example:</p>
                                                    <pre className="whitespace-pre-wrap">{sub.codeExample.example}</pre>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {section.items && (
                                    <ul className="list-disc pl-5 space-y-2">
                                        {section.items.map((item: string, itemIndex: number) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                            {index < sections.length - 1 && <hr className="my-8 border-[#E2E0D8] dark:border-[#2D2D2D]" />}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Guide;
