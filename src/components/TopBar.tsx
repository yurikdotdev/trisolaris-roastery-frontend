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
    <LucideTriangle className="h-3 w-3 fill-custom-accent text-custom-textLight dark:text-custom-textDark" />
    <h1 className="text-md font-inter font-bold tracking-tight">
      Trisolaris Roastery Co.
    </h1>
  </Link>
);

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button
    className="rounded-lg bg-custom-surface p-2 text-custom-textLight"
    onClick={onClick}
  >
    {React.cloneElement(icon, { className: 'h-5 w-4' })}
  </button>
);

const MobileDropdownButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button
    className="text-custom-textLight dark:text-custom-textDark md:hidden"
    onClick={onClick}
  >
    <LucideMenu className="h-5 w-6" />
  </button>
);

const MobileDropdownMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <div
    className={`absolute right-4 top-10 rounded-lg border-custom-textLight bg-custom-bgLight text-sm font-medium text-custom-textLight shadow-sm dark:border-custom-textDark dark:bg-custom-bgDark dark:text-custom-textDark md:hidden ${
      isMenuOpen ? 'block' : 'hidden'
    }`}
  >
    <div className="flex flex-col space-y-1 rounded-md px-4 py-2">
      <button className="flex w-full items-center justify-start p-4">
        <LucideSearch className="mr-2 h-5 w-4" />
        Search
      </button>
      <Link
        to={ROUTES.CHECKOUT}
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
    <div className="sticky top-0 z-50 flex items-center justify-between bg-custom-bgLight px-6 py-4 dark:bg-custom-bgDark md:px-8 lg:px-10">
      <HeaderLogo />

      <div className="hidden items-center justify-center gap-2 md:flex">
        <div className="flex gap-8 font-newsreader text-sm">
          <Link to={ROUTES.ABOUT}>About</Link>
          <p>Same Origins</p>
          <p>Subscriptions</p>
          <p>Learn</p>
          <p>Locations</p>
          <p></p>
        </div>
        <button className="rounded-lg bg-custom-surface px-4 py-2 text-sm font-medium text-custom-textLight">
          <Link to={ROUTES.LOGIN}>Sign in</Link>
        </button>
        <IconButton icon={<LucideSearch />} />
        <Link to={ROUTES.CHECKOUT}>
          {' '}
          <IconButton icon={<LucideShoppingBag />} />{' '}
        </Link>
      </div>

      <MobileDropdownButton onClick={toggleMenu} />
      <MobileDropdownMenu isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default TopBar;
