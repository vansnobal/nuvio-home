import { useTranslation } from 'react-i18next';
import './Footer.css';

export function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Nuvio Note</span>
                    <p>{t('footer.tagline')}</p>
                </div>


                <div className="footer-copyright">
                    <p>{t('footer.copyright', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
}
