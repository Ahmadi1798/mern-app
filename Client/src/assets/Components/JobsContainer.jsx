import { useAllJobsContext } from '../../Pages/AllJobs';
import Job from './Job';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return <p>No jobs to display</p>;
  }
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">
        {totalJobs} Job{jobs.length > 1 && 's found'}
      </h2>
      <div className="grid md:grid-cols-2 mt-2  gap-10">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};
export default JobsContainer;
