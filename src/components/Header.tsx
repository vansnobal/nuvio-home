import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import './Header.css';

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const { i18n } = useTranslation();

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
                    <img
                        src={theme === 'dark' ? '/cat-dark.png' : '/cat-light.png'}
                        alt="Walking Cat"
                        className="cat-image"
                    />
                </div>

                <div className="header-controls">
                    <button
                        className="lang-toggle"
                        onClick={() => {
                            const newLang = i18n.language.startsWith('ko') ? 'en' : 'ko';
                            i18n.changeLanguage(newLang);
                        }}
                    >
                        {i18n.language.startsWith('ko') ? 'EN' : 'KO'}
                    </button>
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
                </div>
            </div>
        </header>
    );
}
