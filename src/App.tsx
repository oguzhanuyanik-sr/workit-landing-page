import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <HeroSection>
        <Navbar />
      </HeroSection>
    </BrowserRouter>
  );
};

export default App;
