import OpenAccount from '../OpenAccount';
import Awards from './Awards';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Education from './Education';
function HomePage(){
    return(
        <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
    )
}
export default HomePage;