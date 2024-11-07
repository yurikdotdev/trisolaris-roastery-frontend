import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import About from './pages/About/About';
import Account from './pages/Account/Account';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/details',
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
