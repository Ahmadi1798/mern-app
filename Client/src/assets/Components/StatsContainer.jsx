import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import StatItem from './StatItem';

const StatsContainer = ({ defaultStats }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:justify-between">
      <StatItem
        title="pending applications"
        count={defaultStats?.pending || 0}
        color="#f59e0b"
        bgc="#fef3c7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="interviews scheduled"
        count={defaultStats?.scheduled || 0}
        color="#647acb"
        bgc="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
      <StatItem
        title="jobs declined"
        count={defaultStats?.declined || 0}
        color="#d66a6a"
        bgc="#ffeeee"
        icon={<FaBug />}
      />
    </div>
  );
};
export default StatsContainer;
