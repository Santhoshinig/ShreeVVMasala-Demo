const allProducts = [
    '/chilli.png',
    '/chicken 65.png',
    '/fish fry.png',
];

export default function ProductStrip() {
    return (
        <section className="product-strip-section banner-style">
            <div className="banner-packet-row">
                {allProducts.map((img, i) => (
                    <div key={i} className="banner-packet-item" data-aos="fade-up" data-aos-delay={i * 100}>
                        <img src={img} alt="Product Banner" className="banner-img" />
                    </div>
                ))}
            </div>
        </section>
    );
}
