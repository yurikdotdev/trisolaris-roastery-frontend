import { LucideTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeaderLogo = ({ link, name }: { link: string; name: string }) => (
  <Link to={link} className="flex items-center gap-2">
    <LucideTriangle className="h-4 w-4 transform fill-custom-accent text-custom-textLight transition-transform duration-300 ease-in-out hover:rotate-180 dark:text-custom-textDark" />
    <h1 className="ease-in-ou font-inter text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-custom-accent">
      {name}
    </h1>
  </Link>
);
