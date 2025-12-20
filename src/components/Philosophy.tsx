import './Philosophy.css';
import { HardDrive, Lock, Keyboard } from 'lucide-react';

const philosophies = [
    {
        icon: <HardDrive size={48} strokeWidth={1.5} />,
        title: 'Local-first'
    },
    {
        icon: <Lock size={48} strokeWidth={1.5} />,
        title: 'Privacy by Design'
    },
    {
        icon: <Keyboard size={48} strokeWidth={1.5} />,
        title: 'Keyboard-first'
    }
];

export function Philosophy() {
    return (
        <section className="philosophy section">
            <div className="container">


                <div className="philosophy-grid">
                    {philosophies.map((item, index) => (
                        <div
                            key={item.title}
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
