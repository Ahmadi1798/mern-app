import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { FormRow, Logo, SubmitBtn } from '../assets/Components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen px-20 py-5 bg-[#fff] dark:bg-[#333]  ">
      <Form
        method="post"
        className="md:w-[25rem] w-[22rem] py-5 px-10 border-t-[0.4rem] border-t-[#2cb1bc] flex flex-col items-center space-y-5 bg-[#f8fafc] dark:bg-[#3f3f3f] rounded-md font-roboto dark:text-[#f0f0f0]"
      >
        <Logo />
        <h4 className="text-3xl md:text-4xl">Login</h4>
        <FormRow name="email" type="email" />
        <FormRow name="password" type="password" />
        <SubmitBtn />
        <button
          onClick={loginDemoUser}
          type="button"
          className="bg-[#2cb1bc] text-white py-1 text-sm w-[20rem] rounded-md capitalize"
        >
          Explore the app
        </button>
        <p>
          Not a member yet ?
          <Link to="/register" className="text-[#2cb1bc]">
            {' '}
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Login;
