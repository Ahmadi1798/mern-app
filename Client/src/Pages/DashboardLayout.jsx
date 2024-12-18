import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { BigSideBar, Navbar, SmallSideBar } from '../assets/Components';
import { createContext, useContext, useState } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const DashBoardContext = createContext();
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const navigate = useNavigate();
  const { user } = useLoaderData();
  const [showSidebar, setshowSidebar] = useState(false);
  const [IsDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !IsDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark', newDarkTheme);
    localStorage.setItem('dark', newDarkTheme);
  };
  const toggleSidebar = () => {
    setshowSidebar(!showSidebar);
    console.log('toggle sidebar');
  };
  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('auth/logout');
    toast.success('Logged out successfully');
  };

  return (
    // Container for the dashboard
    <DashBoardContext.Provider
      value={{
        user,
        showSidebar,
        IsDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <main className="relative grid grid-cols-5 min-h-screen cols-au dark:text-[#f0f0f0]  ">
        <BigSideBar />

        <div className={showSidebar ? 'col-span-4 w-full ' : 'col-span-full'}>
          <SmallSideBar />
          <Navbar />
          <div className="col-span-4 p-10 text-6xl  bg-[#f8fafc] dark:bg-[#222]  min-h-[92vh]">
            {/* Dashboard Page */}
            <Outlet context={{ user }} />
          </div>
        </div>
      </main>
    </DashBoardContext.Provider>
  );
};
export const useDashBoardContext = () => useContext(DashBoardContext);
export default DashboardLayout;
