import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../Styles/BarChartFront.css';
import ChartRender from '../Components/ChartRender';
import { capitalize, extractPathname} from '../Components/helper'; 
const ChartPage = () => {
  const [chartData, setChartData] = useState([]);
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [color, setColor] = useState('#99e0e5'); // Removed extra quotes
  const state = extractPathname().replace(/\//g, '');
  const Header = capitalize(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (label.trim().length === 0 || value.trim().length === 0) {
      toast.warn("Please fill in all fields.");
      return;
    }
    const newData = { label, value, color };
    setChartData([...chartData, newData]);
    setLabel('');
    setValue('');
    setColor('#99e0e5'); // Reset color to default
  };

  return (
    <div>
      <h1>{Header}</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" value={label} placeholder="Label" onChange={(e) => setLabel(e.target.value)} />
          <input type="number" value={value} placeholder="Value" onChange={(e) => setValue(e.target.value)} />
          <label>Choose color </label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          <br />
          <br />
          <button type="submit">Add Data</button>
        </div>
      </form>
      <ChartRender chartData={chartData} />
    </div>
  );
};

export default ChartPage;
