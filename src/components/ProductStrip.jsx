const allProducts = [
    '/home pro1.png',
    '/home pro 2.png',
    '/home pro 3.png',
    '/home pro4.png',
    '/home pro5.png',
    '/home pro6.png',
    '/homepro7.png'
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
