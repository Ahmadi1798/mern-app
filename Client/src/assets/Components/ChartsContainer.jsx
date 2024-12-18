import { useState } from 'react';

import AreaChartContainer from './AreaChartContainer';
import BarChartContainer from './BarChartContainer';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center space-y-3 mt-10 w-full text-2xl md:text-xl">
      <h4 className="text-2xl md:text-4xl">Monthly Applications</h4>
      <button
        type="button"
        className="text-[#2cb1bc] text-xl md:text-2xl"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartContainer data={data} />
      ) : (
        <AreaChartContainer data={data} />
      )}
    </div>
  );
};
export default ChartsContainer;
