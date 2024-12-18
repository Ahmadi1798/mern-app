import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../assets/Components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  console.log('hello world!');
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await customFetch.get('/jobs', {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err;
  }
};

const AllJobsContext = createContext();
const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
