import { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDashBoardContext } from '../../Pages/DashboardLayout';
const LogoutContainer = () => {
  const { user, logoutUser } = useDashBoardContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <div>
      <div className="">
        <button
          type="button"
          className="bg-[#2cb1bc] flex items-center justify-center space-x-2 py-1 px-2 rounded-md shadow-md text-white "
          onClick={() => setShowLogout(!showLogout)}
        >
          {user.avatar ? (
            <img
              src={user.avatar}
              className="w-6 h-6 rounded-full mr-2
            "
              alt="avatar"
            />
          ) : (
            <FaUserCircle className="mr-2" />
          )}
          {user.name}
          <FaCaretDown />
        </button>
        <div className={showLogout ? ' top-0 right-0 left-0 mt-2' : 'hidden'}>
          <button
            className="bg-[#2cb1bc] px-4 py-[3px] rounded-md w-full text-white"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoutContainer;
