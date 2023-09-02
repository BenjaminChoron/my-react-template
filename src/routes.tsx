import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import Page from './pages/Page.tsx';
import PageNotFound from './pages/PageNotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/page',
        element: <Page />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
