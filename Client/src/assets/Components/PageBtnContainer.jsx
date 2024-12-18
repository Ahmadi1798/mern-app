import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../../Pages/AllJobs';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    console.log(search, pathname);
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <div className="flex flex-row flex-wrap space-x-5 items-center justify-end mt-5">
      <button
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
        className="flex flex-row items-center space-x-1.5 text-[#2DB1BC]  hover:text-white hover:bg-[#2DB1BC] dark:hover:bg-[#2DB1BC] bg-[#fff] dark:bg-[#333] text-sm py-2 px-4 duration-500 rounded-s-sm "
      >
        <HiChevronDoubleLeft />
        <span>prev</span>
      </button>
      <div className="flex shadow-sm  ">
        {pages.map((pageNumber) => (
          <button
            className={`border-l border-black/10 text-[#2DB1BC] bg-[#fff]  shadow-sm  text-sm py-2 px-3 rounded-s-sm ${
              pageNumber === currentPage && 'activeClass'
            }`}
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="flex flex-row items-center space-x-1.5 text-[#2DB1BC] hover:text-white hover:bg-[#2DB1BC] dark:hover:bg-[#2DB1BC] bg-[#fff] dark:bg-[#333] text-sm py-2 px-4 duration-500 rounded-s-sm "
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        <span>Next</span>
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};
export default PageBtnContainer;
