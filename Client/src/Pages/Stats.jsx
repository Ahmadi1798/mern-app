import customFetch from '../utils/customFetch';
import { StatsContainer, ChartsContainer } from '../assets/Components';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
