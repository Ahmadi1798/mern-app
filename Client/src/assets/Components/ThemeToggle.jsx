import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDashBoardContext } from '../../Pages/DashboardLayout';
const ThemeToggle = () => {
  const { IsDarkTheme, toggleDarkTheme } = useDashBoardContext();
  return (
    <div>
      <button
        type="button"
        onClick={toggleDarkTheme}
        className="text-[1rem] mt-1
      "
      >
        {IsDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};
export default ThemeToggle;
