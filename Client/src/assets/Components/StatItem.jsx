const StatItem = ({ count, title, icon, color, bgc }) => {
  return (
    <div
      className={`bg-[#fff] dark:bg-[#333] px-6 py-8 flex flex-col space-y-5 items-start justify-center w-full border-b-[0.25rem] h-56 rounded-sm font-roboto`}
      style={{ borderColor: color }}
    >
      <header className="flex flex-row items-center justify-between w-full">
        <span style={{ color: color }} className={`text-6xl font-bold`}>
          {count}
        </span>
        <div
          className="flex items-center justify-center w-16 h-[3.5rem] md:w-20 md:h-[4.5rem] rounded-md"
          style={{ backgroundColor: bgc }}
        >
          <span style={{ color: color }} className={`text-4xl md:text-5xl`}>
            {icon}
          </span>
        </div>
      </header>
      <h5 className="text-xl md:text-2xl capitalize tracking-wide">{title}</h5>
    </div>
  );
};
export default StatItem;
