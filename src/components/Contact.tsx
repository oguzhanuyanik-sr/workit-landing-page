import { Founder, LeftPattern } from '../utils/constants';
import { contactData } from '../utils/constants';
import FilledButton from './common/FilledButton';

const ContactSection = () => {
  return (
    <div className='container flex items-center justify-center flex-col md:flex-row px-10 mt-[150px] md:mt-0'>
      <div className='md:mt-[-150px]'>
        <img className='h-[281px] w-[281px]' src={Founder} alt='Founder' />
      </div>
      <div className='flex flex-col relative text-white bg-purple p-10 mb-20 mt-[-60px] md:mt-[300px] md:ml-[-100px] md:w-4/6 max-w-[700px]'>
        <h3 className='text-4xl font-fraunces font-semibold text-center md:text-start mb-4'>
          {contactData.header}
        </h3>
        <p className='text-base text-center md:text-start'>
          {contactData.desc}
        </p>
        <div className='text-center md:text-start z-10'>
          <FilledButton title={contactData.button} styles='text-base' />
        </div>
        <img
          className='hidden md:block absolute right-0 bottom-[-100px]'
          src={LeftPattern}
          alt='pattern'
        />
      </div>
    </div>
  );
};

export default ContactSection;
