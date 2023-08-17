import { featuresData } from '../utils/constants';

type FeatureCardProps = {
  num: number;
  title: string;
  desc: string;
};

const FeaturesSection = () => {
  return (
    <section className='w-full flex flex-col items-center relative -z-50 text-center  pb-10 md:pb-20 bg-pink before:bg-pink shape'>
      <div className='container flex flex-col lg:flex-row items-center md:items-start px-5 gap-10 lg:gap-0 mt-[230px]'>
        {featuresData.map(({ num, title, desc }) => (
          <FeatureCard key={num} num={num} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ num, title, desc }: FeatureCardProps) => {
  return (
    <div className='flex flex-col sm:flex-row lg:flex-col items-center text-purple px-4 sm:px-8 lg:px-0'>
      <div className='flex justify-center items-center font-fraunces font-semibold text-xl mb-6 sm:mb-0 lg:mb-14'>
        <span className='flex justify-center items-center h-12 w-12 border rounded-full'>
          {num}
        </span>
      </div>
      <div className='sm:px-8'>
        <h2 className='font-fraunces font-semibold text-[1.7rem] text-center sm:text-start lg:text-center mb-4'>
          {title}
        </h2>
        <p className='text-center sm:text-start lg:text-center'>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
