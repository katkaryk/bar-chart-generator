import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import DataEntryForm from '../Pages/BarChartFront';

const SplineChart = () => {
  const [data, setData] = useState([]);

  const handleDataSubmit = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h2>Spline Chart</h2>
      <DataEntryForm onDataSubmit={handleDataSubmit} />
      <Plot
        data={[{ x: data.map((point) => point.x), y: data.map((point) => point.y), type: 'scatter', mode: 'lines' }]}
        layout={{ width: 800, height: 400, title: 'Spline Chart', xaxis: { title: 'X-axis' }, yaxis: { title: 'Y-axis' } }}
      />
    </div>
  );
};

export default SplineChart;
