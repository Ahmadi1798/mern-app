import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { StatItem } from '../assets/Components';
export const loader = async () => {
  try {
    let response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:justify-between">
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bgc="#fef3c7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bgc="#E1E8F9"
        icon={<FaCalendarCheck />}
      />
    </div>
  );
};
export default Admin;
