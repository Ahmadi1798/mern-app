import { FormRow } from '../assets/Components';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get('avatar');
  if (file && file.size > 5000000) {
    toast.error('Image file size should not exceed 500 KB');
    return null;
  }

  try {
    await customFetch.patch('/users/update-user', formData);
    toast.success('Profile updated successfully');
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className="mx-auto container p-10 rounded-sm bg-[#fff] dark:bg-[#333]">
      <Form
        method="post"
        className="flex flex-col space-y-10"
        encType="multipart/form-data"
      >
        <h4 className="md:text-2xl text-xl">Profile</h4>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:space-x-5 md:space-y-0  "
        >
          <div className="flex flex-col space-y-2 w-full  ">
            <label
              htmlFor="avatar"
              className=" capitalize text-sm dark:text-[#f0f0f0]"
            >
              Select an image file (max 0.5 MB):
            </label>
            <input
              className=" h-10 bg-[#fff] dark:bg-[#333]  border-[1px] border-[#e2e8f0] dark:text-[#f0f0f0] rounded-[0.250rem] focus:outline-[#2cb1bc] dark:outline-none  p-2 text-sm w-full"
              type="file"
              id="image"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <FormRow name="name" type="text" value={name} />
          <FormRow name="lastName" type="text" value={lastName} />
        </div>
        <div
          className="flex flex-col space-y-5 items-center 
         md:flex-row md:items-end md:space-x-5 md:space-y-0  "
        >
          <FormRow name="email" type="email" value={email} />
          <FormRow name="location" type="text" value={location} />

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[#2cb1bc] text-sm  text-white py-2 w-full  rounded-md"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </div>
  );
};
export default Profile;
