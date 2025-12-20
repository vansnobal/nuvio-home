import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Nuvio Note</span>
                    <p>Your thoughts, beautifully organized</p>
                </div>


                <div className="footer-copyright">
                    <p>© {currentYear} Nuvio Note. Made with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
