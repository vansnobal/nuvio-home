
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-[#E2E0D8] dark:border-[#2D2D2D] bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        <div className="flex items-center">
          <img 
            src="https://r.jina.ai/i/0f00c507be49492193b2184d2847d043" 
            alt="Nuvio Note Logo" 
            className="h-8 w-auto object-contain opacity-80 dark:invert dark:opacity-60 transition-all duration-300"
          />
        </div>
        
        <div className="flex space-x-8 text-sm text-[#9CA3AF] dark:text-[#4B5563]">
          <a href="#" className="hover:text-[#60A5FA] dark:hover:text-[#60A5FA] transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-[#60A5FA] dark:hover:text-[#60A5FA] transition-colors">{t('footer.terms')}</a>
          <a href="#" className="hover:text-[#60A5FA] dark:hover:text-[#60A5FA] transition-colors">{t('footer.contact')}</a>
        </div>
        
        <p className="text-[#D1D5DB] dark:text-[#2D2D2D] text-xs">
          © {new Date().getFullYear()} Nuvio Note. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
