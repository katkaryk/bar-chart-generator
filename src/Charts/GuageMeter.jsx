import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GaugeMeter = ({ data }) => {
  // Check if data is empty or undefined
  if (!data || data.length === 0) {
    return <div>Please enter the data </div>;
  }

  // Extract chartData from props.data
  const gaugeChartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
        tools: {
          download: true, // Enable download button
        },
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return data.reduce((a, b) => a + parseInt(b.value), 0);
            }
          },
          // Display labels for each point
          valueLabels: {
            show: true,
            color: '#333',
            formatter: function (val, opts) {
              return `${opts.w.globals.labels[opts.dataIndex]}: ${val}`;
            }
          }
        }
      }
    },
    labels: data.map(item => item.label),
    // colors: data.map(item => item.color),
  };

  const gaugeChartSeries = data.map(item => parseInt(item.value)); // Parse value to integer

  return (
    <div>
      <h2>Gauge Chart</h2>
      <ReactApexChart options={gaugeChartOptions} series={gaugeChartSeries} type="radialBar" width={500} height={350} />
    </div>
  );
};

export default GaugeMeter;
