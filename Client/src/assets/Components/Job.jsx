import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JobInfo from './JobInfo';
import { Form } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');

  return (
    <div className=" rounded-sm bg-[#fff] dark:bg-[#333] flex flex-col items-start">
      <header className="flex flex-row space-x-7 items-start border-b border-[#94a3b8] w-full p-5">
        <div className="w-20 h-20 flex items-center justify-center bg-[#2cb1bc] text-white text-[2rem] rounded-sm font-bold">
          {company.charAt(0)}
        </div>
        <div className="flex flex-col items-start justify-center space-y-2">
          <h5 className="text-3xl">{position}</h5>
          <p className="text-xl text-[#94a3b8]">{company}</p>
        </div>
      </header>
      <div className="p-5 w-full">
        <div className="flex flex-col items-start justify-between pr-10 space-y-6">
          <div className="flex flex-col items-start space-y-6  md:flex-row md:items-center md:justify-between md:space-y-0 w-full pr-5">
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
          </div>
          <div className="flex flex-col items-start space-y-6  md:flex-row md:items-center md:justify-between w-full pr-5">
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div
              className={`status ${jobStatus} text-[1.2rem] px-3 py-1 rounded-sm text-center`}
            >
              {jobStatus}
            </div>
          </div>
        </div>

        <footer className="flex flex-row space-x-2 items-center text-[1rem] mt-4">
          <Link
            to={`../edit-job/${_id}`}
            className="py-1.5 px-3 text-white bg-[#2cb1bc] hover:bg-[#2cb1bc]/50 rounded-md"
          >
            Edit
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button
              type="submit"
              className="py-1.5 px-4 text-white bg-[#2cb1bc] hover:bg-[#2cb1bc]/50 rounded-md"
            >
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </div>
  );
};
export default Job;
