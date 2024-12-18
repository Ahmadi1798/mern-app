import { Link } from 'react-router-dom';
import { Logo } from '../assets/Components';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <div className="py-8 px-8 md:px-20 mx-auto font-roboto bg-[#f8fafc] dark:bg-[#333] min-h-screen ">
      <nav className="flex flex-row items-start space-x-5 xl:pl-24">
        {/* Logo */}
        <Logo />
      </nav>
      {/* Content */}
      <div className="flex flex-col justify-center md:flex-row-reverse  mt-52 md:mt-24 py-5 ">
        {/* Main Image */}
        <div className="hidden md:block md:w-[40rem] xl:w-[45rem]">
          <img src={main} />
        </div>
        {/* info */}
        <div className="flex flex-col items-start justify-center space-y-5 md:space-y-12 md:w-[40rem] xl:w-[45rem]">
          <h1 className="text-[2.1rem] font-bold md:text-6xl tracking-wide dark:text-white">
            Job <span className="text-[#2cb1bc]">Tracking </span>App
          </h1>
          <p className="tracking-wide md:text-xl text-gray-500 dark:text-[#94a3b8] md:w-[35rem] leading-7 md:leading-9 w-[25rem]">
            Welcome to <span className="text-[#2cb1bc]">Job Tracking</span> App,
            your ultimate solution for seamless job tracking and career
            management. Whether you're actively applying for new opportunities,
            organizing your job search process, or simply staying on top of your
            career goals, our platform is designed to simplify and streamline
            your journey.
          </p>
          {/* Butons */}
          <div className="flex flex-row items-start space-x-5 ">
            <button className="px-5 py-2 bg-[#38bec9] text-white rounded font-bold md:text-xl">
              <Link to="/register">Register</Link>
            </button>
            <button className="px-5 py-2 bg-[#38bec9] text-white rounded font-bold md:text-xl">
              <Link to="/login">Login / Demo User</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
