import { useDashBoardContext } from '../../Pages/DashboardLayout';
import links from '../../utils/Links';
import { NavLink } from 'react-router-dom';
const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashBoardContext();
  return (
    <div
      className={`flex flex-col items-center justify-center mt-20 space-y-8 dark:text-[#f0f0f0]`}
    >
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === 'admin' && role !== 'admin') return;
        return (
          <NavLink
            to={path}
            key={text}
            className="flex flex-row items-center w-[12rem] pl-6  hover:text-[#2cb1bc]  "
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <div
              className={
                isBigSidebar
                  ? 'flex items-center space-x-6 transition-all hover:translate-x-5 duration-500'
                  : 'flex items-center space-x-6'
              }
            >
              <span className={`text-xl`}>{icon}</span>
              <h3 className={`capitalize text-xl `}>{text}</h3>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
