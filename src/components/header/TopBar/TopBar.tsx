import { NAV_MENU, ROUTES, SITE } from '@/config';
import { useState } from 'react';
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderLinks } from './components/HeaderMenu';
import { NavButtons } from './components/NavigationMenu';
import {
  ResponsiveMenu,
  ResponsiveMenuButton,
} from './components/ResponsiveMenu';

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-custom-bgLight px-6 py-6 shadow-sm md:px-8 lg:px-10 dark:bg-custom-bgDark dark:shadow-stone-800">
      <HeaderLogo name={SITE.SITE_NAME} link={ROUTES.HOME} />
      <HeaderLinks links={NAV_MENU} />
      <NavButtons
        signInRoute={ROUTES.SIGNIN}
        cartRoute={ROUTES.CART}
        onSearch={() => console.log('Search')}
      />
      <ResponsiveMenuButton onClick={toggleMenu} />
      <ResponsiveMenu
        onSearchClick={() => console.log('Search')}
        signInRoute={ROUTES.SIGNIN}
        cartRoute={ROUTES.CART}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}

export default TopBar;