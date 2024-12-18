import { FaTimes } from 'react-icons/fa';
import { useDashBoardContext } from '../../Pages/DashboardLayout';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashBoardContext();

  return (
    <div
      className={
        showSidebar
          ? 'h-screen absolute top-0 bottom-0 right-0 left-0 w-full bg-black py-5 px-5 flex justify-center items-center md:hidden'
          : 'hidden'
      }
    >
      {/* Flex Container */}
      <div className=" bg-[#f8fafc] dark:bg-[#222] h-full w-full p-2 rounded">
        <button className="text-red-800 text-4xl" onClick={toggleSidebar}>
          <FaTimes />{' '}
        </button>
        <header className="flex justify-center items-center mt-8">
          <Logo size="200px" />
        </header>
        {/* NavLinks */}
        <NavLinks />
      </div>
    </div>
  );
};
export default SmallSideBar;
