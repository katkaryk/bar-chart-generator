import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  if (!Array.isArray(data) || data?.length === 0) {
    return <div>Please enter the data donut chart.</div>;
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
      <Chart options={options} series={series} type="donut" height="400" />
    </div>
  );
};

export default DonutChart;
