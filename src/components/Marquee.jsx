const items = [
    { icon: 'fas fa-leaf', text: '100% PURE & NATURAL' },
    { icon: 'fas fa-mortar-pestle', text: 'TRADITIONAL STONE GROUND' },
    { icon: 'fas fa-truck-fast', text: 'DOORSTEP DELIVERY' },
    { icon: 'fas fa-utensils', text: 'SIGNATURE TASTE' },
    { icon: 'fas fa-shield-heart', text: 'NO PRESERVATIVES' },
    { icon: 'fas fa-star', text: 'PREMIUM QUALITY' },
];

export default function Marquee() {
    return (
        <section className="marquee-strip">
            <div className="marquee-content">
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="marquee-item">
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
