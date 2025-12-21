import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './Header.css';

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const { i18n } = useTranslation();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ko', label: '한국어' },
        { code: 'ja', label: '日本語' }
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsLangMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="logo">
                    <img
                        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                        alt="Nuvio Note"
                        className="logo-image"
                    />
                </a>

                <div className="cat-wrapper">
                    {theme === 'dark' ? (
                        <img src="/cat-dark.png" alt="Nuvio Cat" className="cat-image" />
                    ) : (
                        <img src="/cat-light.png" alt="Nuvio Cat" className="cat-image" />
                    )}
                </div>

                <div className="header-controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    <div className="lang-menu-container" ref={langMenuRef}>
                        <button
                            className={`lang-toggle ${isLangMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            aria-label="Select language"
                        >
                            <Globe size={20} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="lang-dropdown animate-fade-in">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`lang-option ${i18n.language.startsWith(lang.code) ? 'selected' : ''}`}
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        <span>{lang.label}</span>
                                        {i18n.language.startsWith(lang.code) && <Check size={16} className="check-icon" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
