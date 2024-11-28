import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import { ROUTES } from './config';

import { loginAction } from './actions/loginAction';
import { registerAction } from './actions/registerAction';

import About from './pages/About/About';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';

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
        path: ROUTES.SIGNIN,
        element: <SignIn />,
        action: loginAction,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
        action: registerAction,
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
