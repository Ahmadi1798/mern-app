import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-10 space-y-4">
        <img src={img} className="md:w-[50rem] mb-5" alt="page not found" />
        <h2 className="text-xl md:text-2xl">Ohh! Page Not Found</h2>
        <p className="text-sm md:text-xl text-gray-500">
          we can't seem to find the page you are looking for
        </p>
        <Link
          to="/"
          className="text-[1rem] md:text-xl underline text-[#2cb1bc]"
        >
          Go Back Home
        </Link>
      </div>
    );
  } else {
    return <div>SomeThing went Wrong</div>;
  }
};
export default Error;
