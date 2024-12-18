const JobInfo = ({ icon, text }) => {
  return (
    <div
      className="flex flex-row items-center
     space-x-6 text-[1.2rem] "
    >
      <span className="job-icon text-[#64748b] dark:text-[#cbd5e1]">
        {icon}
      </span>
      <span className="job-text text-[#0F172A] dark:text-[#F0F0F0]">
        {text}
      </span>
    </div>
  );
};
export default JobInfo;
