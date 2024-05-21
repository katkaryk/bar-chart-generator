import React from 'react';
import Plot from 'react-plotly.js';

const AreaChart = ({ data }) => {
  // Assuming data is in a different format, transform it into the expected format
  const transformedData = [{
    x: data.map(point => point.x),
    y: data.map(point => point.y),
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy',
  }];

  return (
    <Plot
      data={transformedData}
      layout={{
        width: 1500,
        height: 500,
        title: 'Area Chart',
        xaxis: { title: 'X-axis' },
        yaxis: { title: 'Y-axis' },
        barmode: 'overlay',
        fill: 'tozeroy'
      }}
    />
  );
};

export default AreaChart;
