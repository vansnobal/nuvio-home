
import React from 'react';
import { Apple, Layout } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const renderTitle = () => {
    const raw = t('hero.title');
    const transformed = t('hero.transformed');
    const parts = raw.split('{transformed}');

    // CJK (Korean, Japanese) characters often look distorted with artificial italics.
    // Only apply italic/serif to English.
    const transformedClassName = `text-[#60A5FA]`;

    return (
      <>
        {parts[0]} <span className={transformedClassName}>{transformed}</span> {parts[1]}
      </>
    );
  };

  return (
    <section id="download" className="relative pt-20 pb-24 overflow-hidden bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl ${language === 'ja' || language === 'ko' ? 'font-sans font-medium' : 'font-geometric font-bold'} leading-tight text-[#2D3436] dark:text-[#F8F7F2] break-words`}>
              {renderTitle()}
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] px-6 sm:px-8 py-4 rounded-xl shadow-lg hover:bg-[#2C3E50] dark:hover:bg-[#3B82F6] transition-all transform hover:-translate-y-1 w-full sm:w-auto">
              <Apple size={20} className="shrink-0" />
              <div className="text-left">
                <div className="text-xs opacity-80 leading-none mb-1">{t('hero.downloadMac')}</div>
                <div className="text-sm font-bold flex items-center gap-2 flex-wrap">
                  Silicon <span className="text-[10px] bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded uppercase whitespace-nowrap">v1.0.0</span>
                </div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 bg-white dark:bg-[#1E1E1E] text-[#3C4A57] dark:text-[#E2E8F0] border border-[#E2E0D8] dark:border-[#2D2D2D] px-6 sm:px-8 py-4 rounded-xl shadow-sm hover:bg-[#F1EFE7] dark:hover:bg-[#252525] transition-all disabled:opacity-50 w-full sm:w-auto" disabled>
              <Layout size={20} className="shrink-0" />
              <div className="text-left">
                <div className="text-xs opacity-60 leading-none mb-1">{t('hero.downloadWin')}</div>
                <div className="text-sm font-bold">{t('hero.comingSoon')}</div>
              </div>
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100/30 dark:bg-blue-900/10 rounded-[32px] blur-2xl group-hover:bg-blue-200/40 transition-all duration-700"></div>

          <div className="relative bg-white dark:bg-[#1E1E1E] p-2 rounded-[24px] shadow-2xl border border-[#E2E0D8] dark:border-[#2D2D2D] transform rotate-1 group-hover:rotate-0 transition-all duration-500">
            <div className="rounded-[18px] overflow-hidden border border-[#E2E0D8] dark:border-[#2D2D2D] aspect-[4/3] bg-[#F8F7F2] dark:bg-[#121212]">
              <div className="h-12 border-b border-[#E2E0D8] dark:border-[#2D2D2D] flex items-center justify-between px-4 bg-[#F1EFE7] dark:bg-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-80"></div>
                </div>
                <div className="w-48 h-6 bg-white dark:bg-[#121212] rounded-md border border-[#E2E0D8] dark:border-[#2D2D2D]"></div>
                <div className="w-8 h-8 rounded-full bg-[#D1D5DB] dark:bg-[#374151]"></div>
              </div>
              <div className="flex h-full">
                <div className="w-1/2 border-r border-[#E2E0D8] dark:border-[#2D2D2D] p-4 bg-[#F8F7F2] dark:bg-[#121212]">
                  <div className="flex space-x-4 border-b border-[#E2E0D8] dark:border-[#2D2D2D] mb-4 pb-1">
                    <div className="text-[10px] font-bold text-[#60A5FA] border-b-2 border-[#60A5FA] pb-2 uppercase tracking-tighter">{t('hero.mockup.calendar')}</div>
                    <div className="text-[10px] font-bold text-[#9CA3AF] dark:text-[#4B5563] uppercase tracking-tighter">{t('hero.mockup.tasks')}</div>
                    <div className="text-[10px] font-bold text-[#9CA3AF] dark:text-[#4B5563] uppercase tracking-tighter">{t('hero.mockup.timeline')}</div>
                  </div>
                  <div className="space-y-3">
                    {[22, 23, 24, 25].map(day => (
                      <div key={day} className={`p-3 rounded-lg border flex items-center gap-4 transition-colors duration-300 ${day === 24 ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30' : 'bg-white dark:bg-[#1E1E1E] border-[#E2E0D8] dark:border-[#2D2D2D]'}`}>
                        <div className="text-center">
                          <div className="text-[8px] text-[#9CA3AF] dark:text-[#4B5563] uppercase font-bold">Mon</div>
                          <div className={`text-lg font-bold ${day === 24 ? 'text-[#60A5FA]' : 'text-[#374151] dark:text-[#D1D5DB]'}`}>{day}</div>
                        </div>
                        <div className="text-[10px] text-[#9CA3AF] dark:text-[#4B5563] font-medium italic">{t('hero.mockup.noEvents')}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 p-4 bg-white dark:bg-[#121212]">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[#60A5FA] text-[10px] font-bold rounded-md border border-blue-100 dark:border-blue-900/30">2025-12-24</div>
                    <div className="w-6 h-6 rounded-full border border-[#E2E0D8] dark:border-[#2D2D2D] flex items-center justify-center text-[#9CA3AF] dark:text-[#4B5563] text-xs">+</div>
                  </div>
                  <div className="border-l-2 border-[#60A5FA] pl-3 mb-4">
                    <div className="text-[10px] font-bold text-[#60A5FA] tracking-wider uppercase">{t('hero.mockup.todayMeeting')}</div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-48 text-[#D1D5DB] dark:text-[#374151] text-xs uppercase tracking-widest italic font-light">
                    {t('hero.mockup.emptyNotes')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
