import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

type Props = {};

const App = (props: Props) => {
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
