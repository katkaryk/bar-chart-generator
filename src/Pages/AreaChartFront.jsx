import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const AreaChartFront = () => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!xValue || !yValue) {
      alert('Please enter values for both X and Y.');
      return;
    }
    setXValues([...xValues, parseFloat(xValue)]);
    setYValues([...yValues, parseFloat(yValue)]);
    setXValue('');
    setYValue('');
  };

  return (
    <div>
      <h1>Area Chart</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>X Value:</label>
          <input
            type="number"
            value={xValue}
            placeholder="X Value"
            onChange={(e) => setXValue(e.target.value)}
          />
          <label>Y Value:</label>
          <input
            type="number"
            value={yValue}
            placeholder="Y Value"
            onChange={(e) => setYValue(e.target.value)}
          />
          <button type="submit">Add Data Point</button>
        </div>
      </form>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          }
        ]}
        layout={{
          width: 800,
          height: 400,
          title: 'Area Chart',
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
          barmode: 'overlay',
          fill: 'tozeroy'
        }}
      />
    </div>
  );
};

export default AreaChartFront;
