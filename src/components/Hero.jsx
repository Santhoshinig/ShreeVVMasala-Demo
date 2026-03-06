import { useState, useEffect, useRef } from 'react';

const slides = [
    { bg: '/hero1.png' },
    { bg: '/FULL_PRODUCTS_1760x608.png' },
    { bg: '/NEW EDIT.png' },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    const goTo = (idx) => setCurrent((idx + slides.length) % slides.length);

    const reset = (idx) => {
        clearInterval(timerRef.current);
        goTo(idx);
        timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="carousel">
                <div className="carousel-track">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`slide ${i === current ? 'active' : ''}`}
                            style={{ backgroundImage: `url('${slide.bg}')` }}
                        />
                    ))}
                </div>

                <button className="carousel-btn prev" aria-label="previous slide" onClick={() => reset(current - 1)}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="carousel-btn next" aria-label="next slide" onClick={() => reset(current + 1)}>
                    <i className="fas fa-chevron-right"></i>
                </button>

                <div className="carousel-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === current ? 'active' : ''}`}
                            aria-label={`slide ${i + 1}`}
                            onClick={() => reset(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
