import { LightLogo } from '../utils/constants';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between items-center pt-8 flex-wrap gap-5'>
      <Link to='/'>
        <img className='h-6' src={LightLogo} alt='Logo' />
      </Link>
      <Link
        to='/'
        className='text-white border-b-[3px] border-green hover:text-green transition-all text-lg pb-1 text-center'
      >
        Apply for access
      </Link>
    </nav>
  );
};

export default Navbar;
