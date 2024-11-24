import {
  LucideLogIn,
  LucideMenu,
  LucideSearch,
  LucideShoppingBag,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  icon: React.ReactElement;
  label: string;
  onClick?: () => void;
  to?: string;
  className?: string;
}

interface ResponsiveMenuProps {
  isMenuOpen: boolean;
  onSearchClick: () => void;
  signInRoute: string;
  cartRoute: string;
}

const MenuButton: React.FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  to,
  className,
}) => {
  const content = (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-start p-4 ${className}`}
    >
      {React.cloneElement(icon, { className: 'mr-2 h-5 w-4' })}
      {label}
    </button>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export const ResponsiveMenuButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button
    className="text-custom-textLight lg:hidden dark:text-custom-textDark"
    onClick={onClick}
  >
    <LucideMenu className="h-5 w-6" />
  </button>
);

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  isMenuOpen,
  onSearchClick,
  signInRoute,
  cartRoute,
}) => (
  <div
    className={`absolute right-4 top-10 border-none rounded-lg border bg-custom-bgLight text-sm font-medium text-custom-textLight shadow-sm dark:border-custom-textDark dark:bg-custom-bgDark dark:text-custom-textDark ${
      isMenuOpen ? 'block' : 'hidden'
    }`}
  >
    <div className="flex flex-col space-y-1 rounded-md px-4 py-2">
      <MenuButton
        icon={<LucideSearch />}
        label="Search"
        onClick={onSearchClick}
      />
      <MenuButton
        icon={<LucideShoppingBag />}
        label="Cart"
        to={cartRoute}
        className="border-t"
      />
      <MenuButton
        icon={<LucideLogIn />}
        label="Sign in"
        to={signInRoute}
        className="border-t"
      />
    </div>
  </div>
);
