export const SITE = {
  SITE_NAME: 'Trisolaris Roastery Co.',
};

export const BACKEND_URL = 'https://api-trisolaris.yurik.dev';

export const API = {
  PRODUCTS: `${BACKEND_URL}/products`,
  CART: `${BACKEND_URL}/cart`,
  CART_ITEM: `${BACKEND_URL}/cart/items`,
  USERS: `${BACKEND_URL}/users`,
  SIGNIN: `${BACKEND_URL}/auth/login`,
  REGISTER: `${BACKEND_URL}/auth/signup`,
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CART: '/cart',
  SIGNIN: '/signin',
  REGISTER: '/register',
  ACCOUNT: '/account',
  DETAILS: '/products/:productId',
  PRODUCTS: '/products',
  SUBSCRIPTION: '/',
  LEARN: '/',
  LOCATIONS: '/',
  SEARCH: '/search',
};

export const NAV_MENU = [
  { label: 'About', route: ROUTES.ABOUT },
  { label: 'Same Origins', route: ROUTES.PRODUCTS },
  { label: 'Subscriptions', route: ROUTES.SUBSCRIPTION },
  { label: 'Learn', route: ROUTES.LEARN },
  { label: 'Locations', route: ROUTES.LOCATIONS },
];

export const STORAGE = {
  AUTH: 'AUTH_STORAGE',
};
