import LightLogo from '../assets/logo-light.svg';
import DarkLogo from '../assets/logo-dark.svg';
import HeroImage from '../assets/image-hero.webp';
import LeftPattern from '../assets/bg-pattern-3.svg';
import RightPattern from '../assets/bg-pattern-2.svg';
import Founder from '../assets/image-founder.webp';

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from 'react-icons/ai';

const featuresData = [
  {
    num: 1,
    title: 'Actionable insights',
    desc: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    num: 2,
    title: 'Data-driven decisions',
    desc: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    num: 3,
    title: 'Always affordable',
    desc: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
];

const socialData = [
  {
    title: 'facebook',
    url: '/',
    icon: <AiFillFacebook />,
  },
  {
    title: 'twitter',
    url: '/',
    icon: <AiOutlineTwitter />,
  },
  {
    title: 'instagram',
    url: '/',
    icon: <AiOutlineInstagram />,
  },
];

const contactData = {
  header: 'Be the first to test',
  desc: `Hi, I'm Louis Graham, the founder of the company. Book a demo call
  with me to become a beta tester for our app and kickstart your
  company. Apply for access below and I’ll be in touch to schedule a
  call.`,
  button: 'Apply for access',
};

export {
  LightLogo,
  DarkLogo,
  HeroImage,
  LeftPattern,
  RightPattern,
  Founder,
  featuresData,
  socialData,
  contactData,
};
