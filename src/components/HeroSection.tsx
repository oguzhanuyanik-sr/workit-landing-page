import { Link } from 'react-router-dom';
import { HeroImage, LeftPattern, RightPattern } from '../utils/constants';

type Props = {};

const HeroSection = ({ children }: Props) => {
  return (
    <section className='bg-purple h-[500px] relative flex flex-col items-center w-full'>
      <img
        className='hidden sm:block absolute left-[-100px] md:left-[-80px] bottom-[100px]'
        src={LeftPattern}
        alt='pattern'
      />
      <img
        className='hidden sm:block absolute right-[-100px] md:right-[-70px] bottom-0'
        src={RightPattern}
        alt='pattern'
      />
      <div className='container'>
        {children}
        <div>
          <h1 className='text-white font-semibold text-4xl sm:text-5xl md:text-6xl text-center leading-[3rem] sm:leading-[4rem] md:leading-[5rem] mt-16'>
            Data <span className='border-b-[3px] border-green'>tailored</span>{' '}
            to <br /> your needs.
          </h1>
          <div className='flex justify-center'>
            <Link
              to='/'
              className='inline-block bg-green px-6 py-5 font-bold text-base mt-11 hover:bg-purple hover:shadow-green hover:text-green transition-all'
            >
              Lean More
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-bottom bg-purple h-[600px] md:h-[800px] absolute top-[10px] left-0 w-full -z-10 overflow-hidden'></div>
      <img
        className='absolute bottom-[-170px] md:bottom-[-350px] lg:bottom-[-400px] h-48 md:h-80 lg:h-[400px]'
        src={HeroImage}
        alt='Hero'
      />
    </section>
  );
};

export default HeroSection;
