import { HeroImage, LeftPattern, RightPattern } from '../utils/constants';
import FilledButton from './common/FilledButton';

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='w-full flex flex-col items-center relative pb-[200px] bg-purple before:bg-purple shape'>
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
        <h1 className='text-center text-white font-fraunces font-semibold mt-16 text-4xl sm:text-5xl md:text-6xl leading-[3rem] sm:leading-[4rem] md:leading-[5rem]'>
          Data <span className='border-b-[3px] border-green'>tailored</span> to
          <br /> your needs.
        </h1>
        <div className='flex justify-center'>
          <FilledButton title='Lean More' styles='text-xl' />
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
