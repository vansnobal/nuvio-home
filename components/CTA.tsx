
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const CTA: React.FC = () => {
  const { t, language } = useTranslation();

  const renderTitle = () => {
    const raw = t('cta.title');
    const powerful = t('cta.powerful');
    const parts = raw.split('{powerful}');
    return (
      <>
        {parts[0]} <span className="text-[#60A5FA]">{powerful}</span> {parts[1]}
      </>
    );
  };

  return (
    <section className="py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden bg-white dark:bg-[#1E1E1E] border border-[#E2E0D8] dark:border-[#2D2D2D] rounded-[40px] p-12 text-center shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 text-[#60A5FA]/10 dark:text-[#60A5FA]/5">
            <Sparkles size={120} />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-[#60A5FA] rounded-full mb-4 transition-colors">
              <Sparkles size={32} />
            </div>

            <h2 className={`text-3xl md:text-4xl ${language === 'ja' || language === 'ko' ? 'font-sans font-medium' : 'font-serif-elegant font-bold'} text-[#2D3436] dark:text-[#F8F7F2]`}>
              {renderTitle()}
            </h2>

            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-lg max-w-md mx-auto">
              {t('cta.subtitle')}
            </p>

            <div className="pt-6">
              <button disabled className="bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] px-8 py-3 rounded-full font-medium shadow-md transition-all duration-300 opacity-50 cursor-not-allowed">
                {t('cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
