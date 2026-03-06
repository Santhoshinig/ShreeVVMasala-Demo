export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-col" data-aos>
                        <div className="about-image-wrap">
                            <img src="/about.png" alt="Kanishka Home Foods traditional spice preparation" className="about-img" />
                            <div className="about-badge-float">
                                <i className="fas fa-certificate badge-icon" style={{ color: 'var(--gold-light)' }}></i>
                                <div>
                                    <strong>Kanishka</strong>
                                    <small>Home Foods</small>
                                </div>
                            </div>
                            <div className="about-quote-float">
                                <em>"The Secret of Tradition"</em>
                            </div>
                        </div>
                    </div>
                    <div className="about-text-col" data-aos>
                        <p className="section-eyebrow">Our Story</p>
                        <h2 className="section-title">Who We <span className="maroon-text">Are</span></h2>
                        <p className="about-lead">
                            We are <strong>Kanishka Home Foods</strong>, a family-run masala brand based in the heart of Salem,
                            Tamil Nadu — operating under the proud name <strong>Shree VV Masala</strong>.
                        </p>
                        <p className="about-body">
                            Our journey began with a simple belief: that the best spices come from time-tested recipes, pure
                            ingredients, and the love that goes into every grind. We handcraft each masala blend using traditional
                            stone-ground methods, preserving the authentic flavours that Indian kitchens have treasured for generations.
                        </p>
                        <div className="about-values">
                            {[
                                { icon: 'fas fa-leaf', title: '100% Natural', desc: 'No artificial colours, preservatives or chemicals. Just pure spices.' },
                                { icon: 'fas fa-house-chimney-heart', title: 'Family Crafted', desc: 'Made with traditional recipes passed through generations of our family.' },
                                { icon: 'fas fa-box-open', title: 'Fresh Every Batch', desc: 'Small-batch production ensures every order is freshly ground and packed.' },
                            ].map((v, i) => (
                                <div className="value-item" key={v.title} data-aos style={{ transitionDelay: `${i * 150}ms` }}>
                                    <div className="value-icon">
                                        <i className={v.icon}></i>
                                    </div>
                                    <div>
                                        <h4>{v.title}</h4>
                                        <p>{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
