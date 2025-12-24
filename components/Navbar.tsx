
import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F7F2]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-[#E2E0D8] dark:border-[#2D2D2D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src={isDark ? "/logo-dark.png" : "/logo-light.png"}
              alt="Nuvio Note Logo"
              className="h-20 w-auto object-contain transition-all duration-300"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF]">
          <a href="#features" className="hover:text-[#3C4A57] dark:hover:text-white transition-colors">{t('nav.features')}</a>
          <a href="#download" className="hover:text-[#3C4A57] dark:hover:text-white transition-colors">{t('nav.download')}</a>
        </div>

        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 flex items-center gap-1 rounded-full hover:bg-[#E2E0D8] dark:hover:bg-[#2D2D2D] transition-colors text-[#3C4A57] dark:text-[#E2E8F0]"
            >
              <Globe size={18} />
              <ChevronDown size={14} className={`transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1E1E1E] border border-[#E2E0D8] dark:border-[#2D2D2D] rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-[#60A5FA] font-bold'
                      : 'text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F8F7F2] dark:hover:bg-[#2D2D2D]'
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[#E2E0D8] dark:hover:bg-[#2D2D2D] transition-colors text-[#3C4A57] dark:text-[#E2E8F0]"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
