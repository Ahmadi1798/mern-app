import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  EditJob,
  Admin,
} from './Pages';

import { action as registerAction } from './Pages/Register';
import { action as loginAction } from './Pages/Login';
import { loader as dashboardLoader } from './Pages/DashboardLayout';
import { action as addJobAction } from './Pages/AddJob';
import { loader as alljobsLoader } from './Pages/AllJobs';
import { action as editJobAction } from './Pages/EditJob';
import { loader as editJobLoader } from './Pages/EditJob';
import { action as deleteJobAction } from './Pages/DeleteJob';
import { loader as adminPageLoader } from './Pages/Admin';
import { loader as statsLoader } from './Pages/Stats';
import { action as profileAction } from './Pages/Profile';
const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('dark') === 'true';
  document.body.classList.toggle('dark', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
      },
      { path: 'login', element: <Login />, action: loginAction },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: alljobsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminPageLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          {
            path: 'delete-job/:id',
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
