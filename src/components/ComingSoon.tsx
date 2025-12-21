import { useTranslation } from 'react-i18next';
import './ComingSoon.css';

export function ComingSoon() {
    const { t } = useTranslation();

    return (
        <section className="coming-soon section">
            <div className="container">
                <div className="coming-soon-content glass-card">
                    <div className="coming-soon-icon">✨</div>
                    <h2>{t('coming_soon.title')}</h2>
                    <p>
                        {t('coming_soon.desc').split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i === 0 && <br />}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}
