import { Link } from 'react-router-dom';
import { HeroImage, LeftPattern, RightPattern } from '../utils/constants';

type Props = {};

const HeroSection = ({ children }: Props) => {
  return (
    <section className='bg-bottom bg-purple relative flex flex-col items-center w-full pb-[200px]'>
      <img
        className='hidden sm:block absolute left-[-100px] md:left-[-80px] top-[150px]'
        src={LeftPattern}
        alt='pattern'
      />
      <img
        className='hidden sm:block absolute right-[-100px] md:right-[-70px] top-[300px]'
        src={RightPattern}
        alt='pattern'
      />
      <div className='container'>
        {children}
        <div>
          <h1 className='font-fraunces text-white font-semibold text-4xl sm:text-5xl md:text-6xl text-center leading-[3rem] sm:leading-[4rem] md:leading-[5rem] mt-16'>
            Data <span className='border-b-[3px] border-green'>tailored</span>{' '}
            to <br /> your needs.
          </h1>
          <div className='flex justify-center'>
            <Link
              to='/'
              className='inline-block bg-green px-6 md:px-11 py-5 md:py-6 font-bold text-base md:text-xl mt-11 hover:bg-purple hover:shadow-green hover:text-green transition-all'
            >
              Lean More
            </Link>
          </div>
        </div>
      </div>
      <img
        className='mt-[100px] mb-[-340px] h-48 md:h-80 lg:h-[400px]'
        src={HeroImage}
        alt='Hero'
      />
    </section>
  );
};

export default HeroSection;
