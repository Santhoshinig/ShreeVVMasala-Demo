import { useEffect, useState } from 'react';

export default function Loader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loader" className={hidden ? 'hidden' : ''}>
            <div className="loader-content">
                <img src="/products/LOGO SHREE VV.png" alt="Shree VV Logo" className="loader-logo-img" />
                <h1 className="loader-brand">Shree <span>VV</span> Masala</h1>
                <p className="loader-tagline">The Secret of Tradition</p>
                <div className="loader-bar-wrap">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    );
}
