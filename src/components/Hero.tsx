import { useTranslation } from 'react-i18next';
import './Hero.css';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <h1>
                        {t('hero.title_start')}<br />
                        <span className="gradient-text">{t('hero.title_highlight')}</span>
                    </h1>
                    <p className="hero-description animate-fade-in animate-delay-1">
                        {t('hero.description').split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i === 0 && <br />}
                            </span>
                        ))}
                    </p>

                    <div className="hero-buttons animate-fade-in animate-delay-2">
                        <a href="https://github.com/vansnobal/nuvio-home/releases/download/1.0.0/Nuvio.Note_1.0.0_aarch64.dmg" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            {t('hero.download_mac')}
                            <span className="badge-apple">{t('hero.badge_silicon')}</span>
                        </a>
                        <a href="#download" className="btn btn-secondary disabled">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            {t('hero.download_windows')}
                            <span className="badge-coming-soon">{t('hero.badge_coming_soon')}</span>
                        </a>
                    </div>
                </div>

                <div className="hero-image animate-fade-in animate-delay-3">
                    <div className="screenshot-wrapper">
                        <img
                            src="/app-screenshot.png"
                            alt="Nuvio Note 앱 스크린샷"
                            className="screenshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
