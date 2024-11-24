import { LucideSearch, LucideShoppingBag } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => (
  <button
    className={`rounded-lg p-3 text-custom-textLight shadow-sm duration-300 ease-in-out hover:font-bold ${className}`}
    onClick={onClick}
  >
    {React.cloneElement(icon, { className: 'h-5 w-4' })}
  </button>
);

interface NavButtonsProps {
  signInRoute: string;
  cartRoute: string;
  onSearch: () => void;
}

export const NavButtons: React.FC<NavButtonsProps> = ({
  signInRoute,
  cartRoute,
  onSearch,
}) => (
  <div className="hidden items-center justify-center gap-2 lg:flex">
    <Link to={signInRoute}>
      <button className="rounded-lg bg-custom-surface px-4 py-3 text-sm font-medium text-custom-textLight shadow-sm shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800">
        Sign in
      </button>
    </Link>

    <IconButton
      icon={<LucideSearch />}
      onClick={onSearch}
      className="bg-custom-surface text-custom-textLight hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800"
    />

    <Link to={cartRoute}>
      <IconButton
        icon={<LucideShoppingBag />}
        className="bg-custom-surface text-custom-textLight hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800"
      />
    </Link>
  </div>
);
