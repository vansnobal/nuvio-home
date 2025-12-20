import './Hero.css';

export function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <h1>
                        Your thoughts,<br />
                        <span className="gradient-text">beautifully organized</span>
                    </h1>
                    <p className="hero-description animate-fade-in animate-delay-1">
                        Nuvio Note는 당신의 생각을 안전하게 로컬에 저장합니다.<br />
                        클라우드 없이도, 온전히 당신만의 공간에서 작업하세요.
                    </p>

                    <div className="hero-buttons animate-fade-in animate-delay-2">
                        <a href="https://github.com/vansnobal/nuvio-home/releases/download/1.0.0/Nuvio.Note_1.0.0_aarch64.dmg" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            macOS 다운로드
                        </a>
                        <a href="#download" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Windows 다운로드
                            <span className="badge-coming-soon">준비중</span>
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
