export const SITE = {
  SITE_NAME: 'Trisolaris Roastery Co.',
};

export const BACKEND_URL = 'http://localhost:3000'

export const API = {
  PRODUCTS: `${BACKEND_URL}/products`,
  CART: (userId: string) => `${BACKEND_URL}/${userId}/carts`,
  USERS: `${BACKEND_URL}/users`,
  SIGNIN: `${BACKEND_URL}/auth/login`,
  REGISTER: `${BACKEND_URL}/auth/signup`,
}

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
  CART: 'CART_STORAGE',
  AUTH: 'AUTH_STORAGE',
}