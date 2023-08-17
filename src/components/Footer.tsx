import { DarkLogo, socialData } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center mb-20'>
      <Link to='/' className='w-full flex justify-center mb-14'>
        <img src={DarkLogo} alt='Logo' />
      </Link>
      <div className='w-full flex justify-center text-xl text-grey gap-5'>
        {socialData.map((item) => (
          <Link
            key={item.title}
            to={item.url}
            className='hover:text-purple transition-all'
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
