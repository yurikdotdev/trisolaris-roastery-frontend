import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Account from './pages/Account/Account';

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
        element: <Account />
      }
    ],
  },
]);

export default router;
