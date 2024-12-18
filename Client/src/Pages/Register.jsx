import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { FormRow, Logo, SubmitBtn } from '../assets/Components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formdate = await request.formData();
  const data = Object.fromEntries(formdate);
  console.log(data);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
    return error;
  }
};

const Register = () => {
  return (
    <div className="flex items-center bg-[#fff] dark:bg-[#333] justify-center min-h-screen px-20 py-5 ">
      <Form
        method="post"
        className="md:w-[25rem] w-[22rem] py-5 px-10 border-t-[0.4rem] border-t-[#2cb1bc] flex flex-col items-center space-y-5 bg-[#f8fafc] dark:bg-[#3f3f3f] rounded-md font-roboto dark:text-[#f0f0f0]"
      >
        <Logo />
        <h4 className="text-3xl">Register</h4>
        <FormRow name="name" type="text" />
        <FormRow name="lastName" labelText="last name" type="text" />
        <FormRow name="location" labelText="location" type="text" />
        <FormRow name="email" labelText="email" type="email" />
        <FormRow name="password" labelText="password" type="password" />
        <SubmitBtn />
        <p>
          Already a memeber ?
          <Link to="/login" className="text-[#2cb1bc]">
            {' '}
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Register;
