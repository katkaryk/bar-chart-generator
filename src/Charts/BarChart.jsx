import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    noData: {
      text: "PLease input the data",
      align: 'center',
      verticalAlign: 'middle',
      style: { color: "#716779", fontSize: '50px', fontFamily: "NunitoSansSemiBold" }
  },
    colors: "#2aea10",  //Main bar colors set from here *************************
    xaxis: {
      axisTicks: { show: false, },
      axisBorder: { show: false, },
      categories: data.map(item => item.label),
    },
    yaxis: { 
      axisTicks: { show: false, },
      axisBorder: { show: false, },
  },
    fill: { opacity: 1 },
    stroke: { show: true, width: 1, colors: ['transparent'] },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
          }],
        },
      },
    },
  };

  const series = [{
    name: "",
    data: data?.map(item => item?.value),
  }];

  return (
    <ReactApexChart options={options} series={series} type="bar" height={400} />
  );
};

export default BarChart;
