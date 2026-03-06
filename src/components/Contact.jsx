export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="section-header" data-aos>
                    <p className="section-eyebrow center">Get In Touch</p>
                    <h2 className="section-title">Contact <span className="maroon-text">Us</span></h2>
                </div>
                <div className="contact-grid">
                    <div className="contact-card" data-aos>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-location-dot"></i>
                        </div>
                        <h3>Our Address</h3>
                        <p>#456, Moola Pillaiyar Koil Street,<br />Kandampatty, Salem – 636 005,<br />Tamil Nadu, India</p>
                    </div>
                    <div className="contact-card" data-aos>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h3>Phone / WhatsApp</h3>
                        <p><a href="tel:+919042081692">+91 90420 81692</a></p>
                        <a
                            href="https://wa.me/919042081692?text=Hello%20Shree%20VV%20Masala!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                            target="_blank"
                            rel="noreferrer"
                            className="contact-wa-btn"
                        >
                            <i className="fab fa-whatsapp"></i> Chat Now
                        </a>
                    </div>
                    <div className="contact-card" data-aos>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <h3>Email</h3>
                        <p><a href="mailto:kanishkahomefoods@gmail.com">kanishkahomefoods@gmail.com</a></p>
                    </div>
                    <div className="contact-card" data-aos>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3>Business Hours</h3>
                        <p>Monday – Saturday<br />9:00 AM – 7:00 PM<br /><small>Sunday: Closed</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
