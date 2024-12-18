import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../../utils/constants';
import { useAllJobsContext } from '../../Pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <div className="mx-auto container p-10 rounded-sm bg-[#fff] dark:bg-[#333] ">
      <Form className="flex flex-col space-y-10">
        <h4 className="md:text-2xl text-xl">Search form</h4>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:space-x-5 md:space-y-0  "
        >
          <FormRow
            name="search"
            type="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            name="jobStatus"
            list={['all', ...Object.values(JOB_STATUS)]}
            labelText="Job Status"
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="jobType"
            list={['all', ...Object.values(JOB_TYPE)]}
            labelText="Job Type"
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:items-end md:justify-start md:space-x-5 md:space-y-0  "
        >
          <FormRowSelect
            name="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            labelText="sort"
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link
            to="/dashboard/all-jobs"
            className="bg-[#2cb1bc] text-sm  text-white py-2 w-full text-center rounded-md"
          >
            Reset Search Values
          </Link>
          <SubmitBtn />
        </div>
      </Form>
    </div>
  );
};
export default SearchContainer;
