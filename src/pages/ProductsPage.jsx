import Products from '../components/Products';
import { useEffect } from 'react';

export default function ProductsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '40px' }}>
            <div className="container">
                <div className="section-header" data-aos>
                    <p className="section-eyebrow center">Our Full Range</p>
                    <h1 className="section-title">Premium <span className="maroon-text">Masalas</span> & Blends</h1>
                    <p className="section-sub">Explore our complete collection of 16 varieties, handcrafted in Salem for the perfect home-cooked taste.</p>
                </div>
            </div>
            <Products />

            {/* Add a call to action at the bottom of products page */}
            <section className="bulk-order-cta" style={{ padding: '60px 0', textAlign: 'center', background: 'var(--off-white)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Interested in <span className="maroon-text">Bulk Purchase</span>?</h2>
                    <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>We offer special wholesale rates for restaurants and retail shops.</p>
                    <a
                        href="https://wa.me/919042081692?text=Hello!%20I%20am%20interested%20in%20bulk%20orders%20for%20your%20masala%20products."
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cta"
                        style={{ display: 'inline-flex' }}
                    >
                        <i className="fab fa-whatsapp"></i> Enquire for Wholesale
                    </a>
                </div>
            </section>
        </main>
    );
}
