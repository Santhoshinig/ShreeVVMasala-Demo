import { useState, useEffect, useRef } from 'react';

const stats = [
    { icon: 'fas fa-pepper-hot', target: 16, label: 'Masala Varieties' },
    { icon: 'fas fa-certificate', target: 100, label: '% Pure & Natural' },
    { icon: 'fas fa-home', target: 500, label: 'Happy Families' },
    { icon: 'fas fa-handshake', target: 'Bulk', label: 'Orders Welcome' },
];

function useCounter(target, isVisible) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible || typeof target !== 'number') {
            setCount(0); // Reset count when not visible if needed
            return;
        }

        let start = 0;
        const end = parseInt(target);
        const duration = 2000;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * end);

            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        window.requestAnimationFrame(animate);

        return () => { startTime = null; };
    }, [target, isVisible]);

    return count;
}

function StatCard({ icon, target, label }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const count = useCounter(target, visible);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false); // Reset visibility so it triggers again if scrolled back
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="stat-card" ref={ref} data-aos>
            <div className="stat-icon-wrap">
                <i className={icon}></i>
            </div>
            <div className="stat-num">
                {typeof target === 'number' ? count : target}
            </div>
            <p className="stat-label">{label}</p>
        </div>
    );
}

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((s, idx) => (
                        <StatCard key={idx} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}
