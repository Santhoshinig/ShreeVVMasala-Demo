export default function BulkOrder() {
    return (
        <section className="bulk-section" id="bulk">
            <div className="container">
                <div className="bulk-content" data-aos>
                    <div className="bulk-icon">📦</div>
                    <p className="section-eyebrow">Wholesale &amp; Restaurants</p>
                    <h2 className="section-title">Looking for <span style={{ color: 'var(--gold-light)' }}>Bulk Orders?</span></h2>
                    <p className="bulk-desc">
                        We supply to hotels, restaurants, caterers, and grocery stores across Tamil Nadu.
                        Get special wholesale pricing on all 16 masala varieties with fast doorstep delivery.
                    </p>
                    <div className="bulk-features">
                        {[
                            'Competitive Wholesale Pricing',
                            'Custom Packaging Available',
                            'Fresh Stock Every Batch',
                            'Fast Delivery Across TN',
                        ].map(f => (
                            <div className="bulk-feature" key={f}>
                                <i className="fas fa-check-circle"></i>
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919042081692?text=Hello%20Shree%20VV%20Masala!%20I%20would%20like%20to%20enquire%20about%20bulk%20orders.%20Please%20share%20your%20wholesale%20price%20list."
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp-large"
                    >
                        <i className="fab fa-whatsapp"></i>
                        Chat on WhatsApp for Bulk Pricing
                    </a>
                    <p className="bulk-phone">
                        Or call us: <a href="tel:+919042081692">+91 90420 81692</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
