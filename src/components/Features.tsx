import './Features.css';

const features = [
    {
        icon: '🔒',
        title: '로컬 저장',
        description: '모든 데이터가 사용자의 기기에만 저장'
    },
    {
        icon: '📝',
        title: 'Markdown 에디터',
        description: '깔끔하고 효율적인 노트 작성 경험'
    },
    {
        icon: '📅',
        title: '일정 관리',
        description: 'Google Calendar와 연동하여 일정을 한눈에'
    },
    {
        icon: '📊',
        title: '타임라인 뷰',
        description: '간트차트 형식으로 일정을 시각화'
    },
    {
        icon: '🔍',
        title: '빠른 검색',
        description: '전문 검색으로 원하는 내용을 빠르게 찾기'
    }
];

export function Features() {
    return (
        <section className="features section">
            <div className="container">
                <div className="section-header">
                    <h2>주요 기능</h2>
                    <p>생산성을 높이는 핵심 기능들</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
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
