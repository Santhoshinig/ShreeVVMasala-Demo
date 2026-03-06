import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import BulkOrder from '../components/BulkOrder';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main id="home">
            <Hero />
            <Marquee />
            <Products />
            <WhyChooseUs />
            <BulkOrder />
            <About />
            <Contact />
        </main>
    );
}
