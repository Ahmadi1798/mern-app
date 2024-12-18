import { FaAlignLeft } from 'react-icons/fa';
import logo from '../images/logo.svg';
import { useDashBoardContext } from '../../Pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const { toggleSidebar } = useDashBoardContext();
  return (
    // Wrapper
    <div className="flex flex-row items-center justify-center h-20 bg-[#fff] dark:bg-[#333] mx-auto py-12 px-8   ">
      {/* Flex Container */}
      <nav className="flex flex-row items-center justify-between w-full">
        <button
          type="button"
          className="text-[#2cb1bc]"
          onClick={toggleSidebar}
        >
          <FaAlignLeft className="text-3xl md:text-4xl" />
        </button>
        <div>
          <img src={logo} className="md:hidden w-32" />
          <h4 className="hidden md:block text-3xl font-bold">Dashboard</h4>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
