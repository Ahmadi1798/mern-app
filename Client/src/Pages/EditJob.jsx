import { FormRow, FormRowSelect, SubmitBtn } from '../assets/Components';
import { useLoaderData } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    let { data } = await customFetch.get('jobs/' + params.id);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect('/dashboard/all-jobs');
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job updated successfully');
    return redirect('/dashboard/all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const EditJob = () => {
  let { data } = useLoaderData();
  return (
    <div className="mx-auto container p-10 rounded-sm bg-[#fff] dark:bg-[#333]">
      <Form method="post" className="flex flex-col space-y-10">
        <h4 className="md:text-2xl text-xl">Edit Job</h4>
        <div
          className="flex flex-col space-y-5 items-center
       md:flex-row md:space-x-5 md:space-y-0  "
        >
          <FormRow type="text" name="position" value={data.position} />
          <FormRow name="company" type="text" value={data.company} />
          <FormRow
            name="jobLocation"
            type="text"
            labelText="Job Location"
            value={data.jobLocation}
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
            defaultValue={data.JOB_STATUS}
          />
          <FormRowSelect
            name="jobType"
            list={Object.values(JOB_TYPE)}
            labelText="Job Type"
            defaultValue={data.JOB_TYPE}
          />
          <SubmitBtn />
        </div>
      </Form>
    </div>
  );
};
export default EditJob;
