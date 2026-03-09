import { createBrowserRouter } from 'react-router';
import { Root } from './pages/root';
import { Home } from './pages/landing';
import { Tutorials } from './pages/tutorials';
import { TutorialDetail } from './pages/tutorial-detail';
import { Resources } from './pages/resources';
import { Profile } from './pages/profile';
import { Admin } from './pages/admin';
import { NotFound } from './pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'tutorials',
        element: <Tutorials />,
      },
      {
        path: 'tutorial/:id',
        element: <TutorialDetail />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
