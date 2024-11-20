import {
  LucideLogIn,
  LucideMenu,
  LucideSearch,
  LucideShoppingBag,
  LucideTriangle,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: () => void;
}

const HeaderLogo = () => (
  <Link to={ROUTES.HOME} className="flex items-center gap-2">
    <LucideTriangle className="h-4 w-4 transform fill-custom-accent text-custom-textLight transition-transform duration-300 ease-in-out hover:rotate-180 dark:text-custom-textDark" />
    <h1 className="ease-in-ou font-inter text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-custom-accent">
      Trisolaris Roastery Co.
    </h1>
  </Link>
);

const ActionButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button
    className="rounded-lg bg-custom-surface p-3 text-custom-textLight shadow-sm shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800"
    onClick={onClick}
  >
    {React.cloneElement(icon, { className: 'h-5 w-4' })}
  </button>
);

const ResponsiveMenuButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button
    className="text-custom-textLight lg:hidden dark:text-custom-textDark"
    onClick={onClick}
  >
    <LucideMenu className="h-5 w-6" />
  </button>
);

const NavLinks = () => {
  const NAV_LINKS = [
    { label: 'About', route: ROUTES.ABOUT },
    { label: 'Same Origins', route: ROUTES.PRODUCTS },
    { label: 'Subscriptions', route: ROUTES.SUBSCRIPTION },
    { label: 'Learn', route: ROUTES.LEARN },
    { label: 'Locations', route: ROUTES.LOCATIONS },
  ];

  return (
    <div className="hidden gap-8 font-inter text-sm font-semibold lg:flex">
      {NAV_LINKS.map((link, idx) => (
        <Link
          key={idx}
          to={link.route}
          className="cursor-pointer duration-300 ease-in-out hover:text-custom-accent"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const Actions = () => (
  <div className="hidden items-center justify-center gap-2 lg:flex">
    <button className="rounded-lg bg-custom-surface px-4 py-3 text-sm font-medium text-custom-textLight shadow-sm shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
      <Link to={ROUTES.LOGIN}>Sign in</Link>
    </button>
    <ActionButton icon={<LucideSearch />} />
    <Link to={ROUTES.CART}>
      {' '}
      <ActionButton icon={<LucideShoppingBag />} />{' '}
    </Link>
  </div>
);

const ResponsiveMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <div
    className={`absolute right-4 top-10 rounded-lg border-custom-textLight bg-custom-bgLight text-sm font-medium text-custom-textLight shadow-sm dark:border-custom-textDark dark:bg-custom-bgDark dark:text-custom-textDark ${
      isMenuOpen ? 'block' : 'hidden'
    }`}
  >
    <div className="flex flex-col space-y-1 rounded-md px-4 py-2">
      <button className="flex w-full items-center justify-start p-4">
        <LucideSearch className="mr-2 h-5 w-4" />
        Search
      </button>
      <Link
        to={ROUTES.CART}
        className="flex w-full items-center justify-start border-t p-4"
      >
        <LucideShoppingBag className="mr-2 h-5 w-4" />
        Cart
      </Link>
      <Link
        to={ROUTES.LOGIN}
        className="flex w-full items-center justify-start border-t p-4"
      >
        <LucideLogIn className="mr-2 h-5 w-4" />
        Sign in
      </Link>
    </div>
  </div>
);

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-custom-bgLight px-6 py-6 shadow-sm md:px-8 lg:px-10 dark:bg-custom-bgDark dark:shadow-stone-800">
      <HeaderLogo />
      <NavLinks />
      <Actions />

      <ResponsiveMenuButton onClick={toggleMenu} />
      <ResponsiveMenu isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default TopBar;
