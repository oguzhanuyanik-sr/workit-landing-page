import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import FeaturesSection from './components/Features';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <HeroSection>
        <Navbar />
      </HeroSection>
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
