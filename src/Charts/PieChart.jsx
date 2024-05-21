import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  // Check if chartData is defined and is an array before using map function
  if (!Array.isArray(data) || data?.length === 0) {
    return <div>Please enter the data for the pie chart.</div>;
  }

  const labels = data?.map((dataItem) => dataItem.label);
  const series = data?.map((dataItem) => Number(dataItem.value));

  const options = {
    labels: labels,
    legend: {
      show: true,
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="pie" height="400" />
    </div>
  );
};
export default PieChart;