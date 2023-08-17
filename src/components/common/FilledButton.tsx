import { Link } from 'react-router-dom';

const FilledButton = ({ title, styles }: { title: string; styles: string }) => {
  return (
    <Link
      to='/'
      className={`${styles} inline-block text-purple font-bold bg-green px-6 py-5 mt-11 hover:bg-purple hover:shadow-green hover:text-green transition-all`}
    >
      {title}
    </Link>
  );
};

export default FilledButton;
