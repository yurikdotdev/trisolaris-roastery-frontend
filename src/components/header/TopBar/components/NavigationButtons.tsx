import { useProducts } from '@/hooks/useProducts';
import { deleteCookie } from '@/lib/cookie';
import { setAuthenticated } from '@/stores/useAuthStore';
import { LucideSearch, LucideShoppingBag } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

interface NavButtonsProps {
  signInRoute: string;
  cartRoute: string;
  onSearch: () => void;
  isAuthenticated: boolean;
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

const handleSignOut = () => {
  setAuthenticated(false);
  deleteCookie('token');
};

export const NavButtons: React.FC<NavButtonsProps> = ({
  signInRoute,
  cartRoute,
  onSearch,
  isAuthenticated,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useProducts();
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
    onSearch();
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (searchQuery.trim()) {
        navigate(`/search?q=${searchQuery}`);
      }

      handleCloseSearch();
    }
  };

  return (
    <div className="hidden items-center justify-center gap-2 lg:flex">
      {isAuthenticated ? (
        <button
          onClick={handleSignOut}
          className="rounded-lg bg-custom-surface px-4 py-3 text-sm font-medium text-custom-textLight shadow-sm shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800"
        >
          Sign Out
        </button>
      ) : (
        <Link to={signInRoute}>
          <button className="rounded-lg bg-custom-surface px-4 py-3 text-sm font-medium text-custom-textLight shadow-sm shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800">
            Sign in
          </button>
        </Link>
      )}

      <IconButton
        icon={<LucideSearch />}
        onClick={handleOpenSearch}
        className="bg-custom-surface text-custom-textLight hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800"
      />

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-start justify-center bg-black bg-opacity-60 transition duration-300 ease-in-out">
          <div className="relative mt-20 w-2/4 rounded-lg bg-black bg-opacity-60 p-4 shadow-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border-none bg-transparent p-4 text-lg focus:outline-none"
              autoFocus
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <button
              onClick={handleCloseSearch}
              className="absolute right-2 top-2 p-2 font-bold text-custom-textDark hover:text-custom-accent"
            >
              X
            </button>
          </div>
        </div>
      )}

      <Link to={cartRoute}>
        <IconButton
          icon={<LucideShoppingBag />}
          className="bg-custom-surface text-custom-textLight hover:bg-custom-accent hover:text-custom-bgLight dark:shadow-stone-800"
        />
      </Link>
    </div>
  );
};
