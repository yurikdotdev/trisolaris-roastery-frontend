import { createBrowserRouter } from 'react-router-dom';
import App from './App'

import Home from './pages/Home/Home';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);

export default router;