import { FormRow, FormRowSelect, SubmitBtn } from '../assets/Components';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    // Container
    <div className="mx-auto container p-10 rounded-sm bg-[#fff] dark:bg-[#333] ">
      <Form method="post" className="flex flex-col space-y-10">
        <h4 className="md:text-2xl text-xl">Add Job</h4>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:space-x-5 md:space-y-0  "
        >
          <FormRow name="position" type="text" />
          <FormRow name="company" type="text" />
          <FormRow
            name="jobLocation"
            type="text"
            labelText="Job Location"
            defaultValue={user.location}
          />
        </div>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:items-end md:space-x-5 md:space-y-0  "
        >
          <FormRowSelect
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
            labelText="Job Status"
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelect
            name="jobType"
            list={Object.values(JOB_TYPE)}
            labelText="Job Type"
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <SubmitBtn />
        </div>
      </Form>
    </div>
  );
};
export default AddJob;
