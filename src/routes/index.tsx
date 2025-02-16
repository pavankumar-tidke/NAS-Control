import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Dashboard } from '@/pages/dashboard';
import { Storage } from '@/pages/storage';
import { Users } from '@/pages/users';
import { Files } from '@/pages/files';
import { Network } from '@/pages/network';
import { Backup } from '@/pages/backup';
import { Security } from '@/pages/security';
import { Logs } from '@/pages/logs';
import { System } from '@/pages/system';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/storage', element: <Storage /> },
      { path: '/users', element: <Users /> },
      { path: '/files', element: <Files /> },
      { path: '/network', element: <Network /> },
      { path: '/backup', element: <Backup /> },
      { path: '/security', element: <Security /> },
      { path: '/logs', element: <Logs /> },
      { path: '/system', element: <System /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}