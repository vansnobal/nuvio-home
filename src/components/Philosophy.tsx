import { useTranslation } from 'react-i18next';
import './Philosophy.css';
import { HardDrive, Lock, Keyboard } from 'lucide-react';

export function Philosophy() {
    const { t } = useTranslation();

    const philosophies = [
        {
            icon: <HardDrive size={48} strokeWidth={1.5} />,
            title: t('philosophy.items.local_first')
        },
        {
            icon: <Lock size={48} strokeWidth={1.5} />,
            title: t('philosophy.items.privacy')
        },
        {
            icon: <Keyboard size={48} strokeWidth={1.5} />,
            title: t('philosophy.items.keyboard')
        }
    ];

    return (
        <section className="philosophy section">
            <div className="container">


                <div className="philosophy-grid">
                    {philosophies.map((item, index) => (
                        <div
                            key={index}
                            className="philosophy-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="philosophy-icon">{item.icon}</span>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
