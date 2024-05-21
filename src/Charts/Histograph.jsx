import React from 'react';
import Chart from 'react-apexcharts';

const HistogramChart = ({ data }) => {
  // Check if data is defined and is an array before using map function
  if (!Array.isArray(data) || data?.length === 0) {
    return <div>Please enter the data for histogram chart.</div>;
  }

  // Extracting values from data array
  const values = data.map((item) => Number(item.value));

  // Count occurrences of each value
  const counts = {};
  values.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  // Converting counts object to series data format
  const seriesData = Object.keys(counts).map((key) => ({
    x: Number(key),
    y: counts[key],
  }));

  // Sorting series data by x values
  seriesData.sort((a, b) => a.x - b.x);

  const options = {
    chart: {
      type: 'histogram',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      title: {
        text: 'Value',
      },
    },
    yaxis: {
      title: {
        text: 'Frequency',
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={[{ data: seriesData }]} type="bar" height="400" />
    </div>
  );
};

export default HistogramChart;
