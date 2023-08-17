import { featuresData } from '../utils/constants';

type Props = {};

const FeaturesSection = (props: Props) => {
  return (
    <section className='bg-bottom-pink relative flex flex-col items-center w-full -z-50 pb-10 md:pb-20'>
      <div className='container mt-[230px] flex flex-col lg:flex-row items-center md:items-start px-5 gap-10 lg:gap-0'>
        {featuresData.map((item) => (
          <FeatureCard num={item.num} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ num, title, desc }: Props) => {
  return (
    <div className='flex flex-col sm:flex-row lg:flex-col items-center text-purple px-4 sm:px-8 lg:px-0'>
      <div className='flex justify-center items-center font-fraunces font-semibold text-xl mb-6 sm:mb-0 lg:mb-14'>
        <span className='border rounded-full h-12 w-12 flex justify-center items-center'>
          {num}
        </span>
      </div>
      <div className='sm:px-8'>
        <h2 className='font-fraunces font-semibold text-[1.7rem] mb-4 text-center sm:text-start lg:text-center'>
          {title}
        </h2>
        <p className='text-center sm:text-start lg:text-center'>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
