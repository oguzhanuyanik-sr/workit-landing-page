import { LightLogo } from '../utils/constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex flex-wrap justify-between items-center pt-8 gap-5'>
      <Link to='/'>
        <img src={LightLogo} alt='Logo' />
      </Link>
      <Link
        to='/'
        className='text-center text-lg text-white hover:text-green transition-all border-b-[3px] border-green pb-1'
      >
        Apply for access
      </Link>
    </nav>
  );
};

export default Navbar;
