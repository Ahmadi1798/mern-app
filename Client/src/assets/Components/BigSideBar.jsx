import { useDashBoardContext } from '../../Pages/DashboardLayout';
import Logo from './Logo';
import NavLinks from './NavLinks';
const BigSideBar = () => {
  const { showSidebar } = useDashBoardContext();
  return (
    <div className={showSidebar ? 'big-sidebar' : 'hidden'}>
      {/* Contents */}
      <header className="flex items-center justify-center mt-5 mr-2 ">
        <Logo size="180px" />
      </header>
      <div className="pr-10 ">
        <NavLinks isBigSidebar />
      </div>
    </div>
  );
};
export default BigSideBar;
