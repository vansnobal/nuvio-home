
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

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
            className="h-[62px] w-[198px] object-contain object-center transition-all duration-300"
          />
        </div>



        <p className="text-[#D1D5DB] dark:text-[#2D2D2D] text-xs">
          © {new Date().getFullYear()} Nuvio Note. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
