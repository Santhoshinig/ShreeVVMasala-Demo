import { useEffect, useState } from 'react';

export default function Loader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loader" className={hidden ? 'hidden' : ''}>
            <div className="loader-content">
                <video src="/L10.mp4" autoPlay loop muted playsInline className="loader-video" />
                <h1 className="loader-brand">SHREE <span>VV</span> MASALA</h1>
                <div className="loader-tagline-wrap">
                    <span className="tagline-line"></span>
                    <p className="loader-tagline">TRADITION REDEFINED</p>
                    <span className="tagline-line"></span>
                </div>
                <div className="loader-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
