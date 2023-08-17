import { DarkLogo } from '../utils/constants';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='w-full flex flex-col items-center mb-20'>
      <div className='mb-14 w-full flex justify-center'>
        <img src={DarkLogo} alt='Logo' />
      </div>
      <div className='w-full flex justify-center text-grey gap-5 text-xl'>
        <Link to='/' className='hover:text-purple transition-all'>
          <AiFillFacebook />
        </Link>
        <Link to='/' className='hover:text-purple transition-all'>
          <AiOutlineTwitter />
        </Link>
        <Link to='/' className='hover:text-purple transition-all'>
          <AiOutlineInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
