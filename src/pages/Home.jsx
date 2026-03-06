import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import ProductStrip from '../components/ProductStrip';
import WhyChooseUs from '../components/WhyChooseUs';
import BulkOrder from '../components/BulkOrder';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main id="home">
            <Hero />
            <Marquee />
            <Stats />
            <ProductStrip />
            <WhyChooseUs />
            <BulkOrder />
            <About />
            <Contact />
        </main>
    );
}
