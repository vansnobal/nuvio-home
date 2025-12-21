import { useTranslation } from 'react-i18next';
import './Features.css';

export function Features() {
    const { t } = useTranslation();

    const features = [
        {
            icon: '🔒',
            title: t('features.items.local.title'),
            description: t('features.items.local.desc')
        },
        {
            icon: '📝',
            title: t('features.items.markdown.title'),
            description: t('features.items.markdown.desc')
        },
        {
            icon: '📅',
            title: t('features.items.calendar.title'),
            description: t('features.items.calendar.desc')
        },
        {
            icon: '📊',
            title: t('features.items.timeline.title'),
            description: t('features.items.timeline.desc')
        },
        {
            icon: '🔍',
            title: t('features.items.search.title'),
            description: t('features.items.search.desc')
        }
    ];

    return (
        <section className="features section">
            <div className="container">
                <div className="section-header">
                    <h2>{t('features.title')}</h2>
                    <p>{t('features.subtitle')}</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="feature-icon">{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
