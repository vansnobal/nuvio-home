
import React from 'react';
import { Apple, Layout } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const handleDownload = (e: React.MouseEvent, platform: 'mac' | 'win') => {
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

    if (isMobile) {
      e.preventDefault();
      alert(t('hero.mobileAlert'));
      return;
    }

    if (platform === 'win') {
      e.preventDefault();
      return;
    }
  };

  const renderTitle = () => {
    const title = t('hero.title');
    const parts = title.split('{transformed}');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-blue-500 dark:text-[#60A5FA] relative inline-block">
            {t('hero.transformed')}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 dark:text-blue-900 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-10 transform translate-x-1/3 -translate-y-1/4">
        <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#60A5FA" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.1,34.5C60.1,46.1,49.5,55.8,37.4,62.8C25.3,69.8,11.7,74.1,-1.1,76C-13.9,77.9,-26.9,77.4,-39.3,71.6C-51.7,65.8,-63.5,54.7,-72.2,41.4C-80.9,28.1,-86.5,12.6,-85.4,-2.4C-84.3,-17.4,-76.5,-31.9,-66.2,-43.8C-55.9,-55.7,-43.1,-65,-29.9,-72.7C-16.7,-80.4,-3.1,-86.5,7.9,-81.9L18.9,-77.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className={`text-3xl sm:text-4xl md:text-6xl ${language === 'ja' || language === 'ko' ? 'font-sans font-medium' : 'font-geometric font-bold'} leading-tight text-[#2D3436] dark:text-[#F8F7F2] break-words`}>
              {renderTitle()}
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={(e) => handleDownload(e, 'mac')}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] px-2 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-[#2C3E50] dark:hover:bg-[#3B82F6] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <Apple className="shrink-0 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
              <div className="text-left min-w-0">
                <div className="text-[10px] sm:text-xs opacity-80 leading-snug mb-0.5 sm:mb-1 whitespace-normal break-words">{t('hero.downloadMac')}</div>
                <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5 flex-wrap">
                  Silicon <span className="text-[10px] bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded uppercase whitespace-nowrap">v1.0.0</span>
                </div>
              </div>
              <div className="w-0 sm:w-5 shrink-0" aria-hidden="true"></div>
            </button>
            <button
              onClick={(e) => handleDownload(e, 'win')}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white dark:bg-[#1E1E1E] text-[#3C4A57] dark:text-[#E2E8F0] border border-[#E2E0D8] dark:border-[#2D2D2D] px-2 sm:px-8 py-3 sm:py-4 rounded-xl shadow-sm hover:bg-[#F1EFE7] dark:hover:bg-[#252525] transition-all disabled:opacity-50 w-full sm:w-auto" disabled
            >
              <Layout className="shrink-0 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
              <div className="text-left min-w-0">
                <div className="text-[10px] sm:text-xs opacity-60 leading-snug mb-0.5 sm:mb-1 whitespace-normal break-words">{t('hero.downloadWin')}</div>
                <div className="text-xs sm:text-sm font-bold">{t('hero.comingSoon')}</div>
              </div>
              <div className="w-0 sm:w-5 shrink-0" aria-hidden="true"></div>
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
