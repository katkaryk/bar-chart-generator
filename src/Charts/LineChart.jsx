import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ data }) => {
  // Check if data is defined and is an array before using map function
  if (!Array.isArray(data) || data?.length === 0) {
    return <div>Please enter the data for the line chart.</div>;
  }

  const labels = data?.map((dataItem) => dataItem.label);
  const series = data?.map((dataItem) => Number(dataItem.value));

  const options = {
    xaxis: {
      categories: labels,
    },
    legend: {
      show: true,
    },
  };

  return (
    <div>
      <Chart options={options} series={[{ data: series }]} type="line" height="400" />
    </div>
  );
};

export default LineChart;
