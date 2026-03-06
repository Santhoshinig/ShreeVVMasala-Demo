export default function WhyChooseUs() {
    const cards = [
        { icon: 'fas fa-microscope', title: 'Quality Assured', desc: 'Every ingredient is carefully sourced and quality-checked before entering our grinding process.' },
        { icon: 'fas fa-bolt-lightning', title: 'Fresh On Order', desc: 'We grind and pack your masalas fresh so you always receive maximum aroma and flavour.' },
        { icon: 'fas fa-truck-ramp-box', title: 'Door Delivery', desc: 'Quick and reliable delivery across Salem and nearby areas for bulk and retail orders.' },
        { icon: 'fas fa-hand-holding-dollar', title: 'Affordable Pricing', desc: 'Premium quality masalas at pocket-friendly prices — special rates for bulk & wholesale buyers.' },
    ];

    return (
        <section className="why-section" id="why">
            <div className="container">
                <div className="section-header" data-aos>
                    <p className="section-eyebrow center">Why Shree VV?</p>
                    <h2 className="section-title">The <span className="maroon-text">Difference</span> You Taste</h2>
                </div>
                <div className="why-grid">
                    {cards.map(c => (
                        <div className="why-card" key={c.title} data-aos>
                            <div className="why-icon-wrap">
                                <i className={c.icon}></i>
                            </div>
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
