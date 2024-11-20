import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import { ROUTES } from '@/config/routes';

import About from './pages/About/About';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
      {
        path: ROUTES.ACCOUNT,
        element: <Account />,
      },
      {
        path: ROUTES.DETAILS,
        element: <ProductDetail />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <Products />,
      },
    ],
  },
]);

export default router;
