import { Link } from 'react-router-dom';
import { Founder, LeftPattern } from '../utils/constants';

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div className='container flex flex-col md:flex-row items-center justify-center w-full px-10 mt-[150px] md:mt-0'>
      <div className='md:mt-[-150px]'>
        <img className='h-[281px] w-[281px]' src={Founder} alt='Founder' />
      </div>
      <div className='max-w-[700px] flex flex-col bg-purple text-white mb-20 mt-[-60px] p-10 md:w-4/6 md:mt-[300px] md:ml-[-100px] relative'>
        <h3 className='font-fraunces font-semibold text-4xl mb-4 text-center md:text-start'>
          Be the first to test
        </h3>
        <p className='text-base text-center md:text-start'>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <div className='text-center md:text-start z-10'>
          <Link
            to='/'
            className='inline-block bg-green px-6 py-5 font-bold text-base mt-11 hover:bg-purple hover:shadow-green hover:text-green transition-all text-purple'
          >
            Apply for access
          </Link>
        </div>
        <img
          className='absolute bottom-[-100px] hidden md:block right-0'
          src={LeftPattern}
          alt='pattern'
        />
      </div>
    </div>
  );
};

export default ContactSection;
