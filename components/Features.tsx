
import React from 'react';
import { Shield, FileText, Calendar, GanttChart, Search, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const iconMap = [
  <Shield className="text-blue-500" />,
  <FileText className="text-amber-500" />,
  <Calendar className="text-rose-500" />,
  <GanttChart className="text-indigo-500" />,
  <Search className="text-emerald-500" />,

];

const Features: React.FC = () => {
  const { t, language } = useTranslation();
  const featureItems = t('features.items');

  return (
    <section id="features" className="py-24 bg-[#F1EFE7]/50 dark:bg-[#1A1A1A]/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl ${language === 'ja' || language === 'ko' ? 'font-sans font-medium' : 'font-geometric font-bold'} text-[#2D3436] dark:text-[#F8F7F2]`}>{t('features.title')}</h2>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((f: any, i: number) => (
            <div key={i} className="group p-6 bg-white dark:bg-[#1E1E1E] border border-[#E2E0D8] dark:border-[#2D2D2D] rounded-2xl hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#F8F7F2] dark:bg-[#121212] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {React.cloneElement(iconMap[i] as React.ReactElement, { size: 20 })}
                </div>
                <h3 className="text-lg font-bold text-[#3C4A57] dark:text-[#E2E8F0]">{f.title}</h3>
              </div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
