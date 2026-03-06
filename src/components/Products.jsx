const products = [
    {
        img: '/products/turmeric 500.png',
        badge: 'Premium', badgeClass: '',
        name: 'Turmeric Powder',
        desc: 'Pure hand-ground haldi with vibrant colour & rich curcumin.',
        wa: 'Hello!%20I%20am%20interested%20in%20Turmeric%20Powder%20from%20Shree%20VV%20Masala.',
    },
    {
        img: '/products/Dhaniya 500.png',
        badge: null,
        name: 'Dhaniya Powder',
        desc: 'Freshly ground coriander with warm citrusy aroma — the base of every great curry.',
        wa: 'Hello!%20I%20am%20interested%20in%20Dhaniya%20Powder.',
    },
    {
        img: '/products/kulambu thool.png',
        badge: 'Popular', badgeClass: 'popular',
        name: 'Kulambu Thool',
        desc: 'Signature Tamil kuzhambu blend — 15+ spices, bold & aromatic.',
        wa: 'Hello!%20I%20am%20interested%20in%20Kulambu%20Thool.',
    },
    {
        img: '/products/idli 500.png',
        badge: null,
        name: 'Idly Podi',
        desc: 'Classic South Indian breakfast podi with roasted lentils & sesame seeds.',
        wa: 'Hello!%20I%20am%20interested%20in%20Idly%20Podi.',
    },
    {
        img: '/products/chicken 500.png',
        badge: 'Signature', badgeClass: '',
        name: 'Chicken Masala',
        desc: 'Robust aromatic blend for deep, mouth-watering chicken dishes.',
        wa: 'Hello!%20I%20am%20interested%20in%20Chicken%20Masala.',
    },
    {
        img: '/products/chilli 500.png',
        badge: null,
        name: 'Chilli Powder',
        desc: 'Sun-dried premium red chillies ground to vibrant, consistently-hot powder.',
        wa: 'Hello!%20I%20am%20interested%20in%20Chilli%20Powder.',
    },
    {
        img: '/products/sambar 500.png',
        badge: 'Popular', badgeClass: 'popular',
        name: 'Sambar Powder',
        desc: 'Traditional Tamil sambar powder — perfectly balanced for authentic taste.',
        wa: 'Hello!%20I%20am%20interested%20in%20Sambar%20Powder.',
    },
    {
        img: '/products/rasam powder 500.png',
        badge: null,
        name: 'Rasam Powder',
        desc: 'Light & fragrant blend — comforting, digestive and deeply soothing.',
        wa: 'Hello!%20I%20am%20interested%20in%20Rasam%20Powder.',
    },
    {
        img: '/products/parupu podi 500.png',
        badge: null,
        name: 'Paruppu Podi',
        desc: 'Nutritious lentil powder — delicious with ghee over hot rice.',
        wa: 'Hello!%20I%20am%20interested%20in%20Paruppu%20Podi.',
    },
    {
        img: '/products/chicken 65 500.png',
        badge: 'Trending', badgeClass: 'new-badge',
        name: 'Chicken 65 Masala',
        desc: 'The secret for perfectly crispy, spicy street-food style Chicken 65.',
        wa: 'Hello!%20I%20am%20interested%20in%20Chicken%2065%20Masala.',
    },
    {
        img: '/products/chilli chicken 500.png',
        badge: null,
        name: 'Chilli Chicken Masala',
        desc: 'Punchy Indo-Chinese style with bold, tangy glazed flavours.',
        wa: 'Hello!%20I%20am%20interested%20in%20Chilli%20Chicken%20Masala.',
    },
    {
        img: '/products/fish kulambu 500.png',
        badge: 'Popular', badgeClass: 'popular',
        name: 'Fish Kulambu Masala',
        desc: 'Coastal-style fish curry blend — tangy, spicy & richly aromatic.',
        wa: 'Hello!%20I%20am%20interested%20in%20Fish%20Kulambu%20Masala.',
    },
    {
        img: '/products/mutton 500.png',
        badge: null,
        name: 'Muttun Masala',
        desc: 'Rich earthy spices for slow-cooked mutton gravies and biryani.',
        wa: 'Hello!%20I%20am%20interested%20in%20Muttun%20Masala.',
    },
    {
        img: '/products/garam 500.png',
        badge: null,
        name: 'Garam Masala',
        desc: 'The finishing spice — cinnamon, cloves, cardamom & star anise.',
        wa: 'Hello!%20I%20am%20interested%20in%20Garam%20Masala.',
    },
    {
        img: '/products/FIshfry 500.png',
        badge: 'Best Seller', badgeClass: '',
        name: 'Fish Fry Masala',
        desc: 'Citrusy coating masala for a beautiful golden crust every time.',
        wa: 'Hello!%20I%20am%20interested%20in%20Fish%20Fry%20Masala.',
    },
    {
        img: '/products/curry 500.png',
        badge: null,
        name: 'Curry Masala',
        desc: 'Versatile all-purpose blend — balanced heat for veg & non-veg dishes.',
        wa: 'Hello!%20I%20am%20interested%20in%20Curry%20Masala.',
    },
];

function ProductCard({ p }) {
    return (
        <div className="product-card" data-aos>
            <div className="product-img-wrap">
                {p.badge && (
                    <div className="product-badge-wrap">
                        <span className={`product-badge ${p.badgeClass || ''}`}>{p.badge}</span>
                    </div>
                )}
                <img src={p.img} alt={p.name} className="product-img" loading="lazy" />
            </div>
            <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a
                    href={`https://wa.me/919042081692?text=${p.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="product-btn"
                >
                    <i className="fab fa-whatsapp"></i> Enquire Now
                </a>
            </div>
        </div>
    );
}

export default function Products({ limit }) {
    const displayProducts = limit ? products.slice(0, limit) : products;

    return (
        <section className="products-section" id="products">
            <div className="container">
                <div className="products-grid">
                    {displayProducts.map(p => (
                        <ProductCard key={p.name} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
