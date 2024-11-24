export const SITE = {
  SITE_NAME: 'Trisolaris Roastery Co.',
};

export const API = {
  PRODUCTS: 'http://localhost:5000/products',
  USERS: 'http://localhost:5000/users',
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
