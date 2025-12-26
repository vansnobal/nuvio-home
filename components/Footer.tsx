
import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-12 border-t border-[#E2E0D8] dark:border-[#2D2D2D] bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        <div className="flex items-center justify-center">
          <img
            src={isDark ? "/logo-dark.png" : "/logo-light.png"}
            alt="Nuvio Note Logo"
            className="h-[32px] w-auto md:h-[62px] md:w-[198px] object-contain object-center transition-all duration-300"
          />
        </div>

        <div className="flex space-x-6 text-[#4B5563] dark:text-[#9CA3AF] text-sm">
          <Link to="/privacy" className="hover:text-[#2D2D2D] dark:hover:text-[#E2E0D8] transition-colors duration-200">
            {t('footer.privacy')}
          </Link>
          <Link to="/terms" className="hover:text-[#2D2D2D] dark:hover:text-[#E2E0D8] transition-colors duration-200">
            {t('footer.terms')}
          </Link>
        </div>



        <p className="text-[#D1D5DB] dark:text-[#2D2D2D] text-xs">
          © {new Date().getFullYear()} Nuvio Note. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
