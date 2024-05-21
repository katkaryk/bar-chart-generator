import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const DynamicVennDiagram = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  const handleGenerateDiagram = () => {
    // Validate input
    if (!valueA || !valueB) {
      alert('Please enter values for both sets.');
      return;
    }

    // Create data for the Venn diagram
    const data = [
      {
        type: 'venn',
        x: ['A', 'B', 'A&B'],
        y: [parseInt(valueA), parseInt(valueB), parseInt(valueA) + parseInt(valueB)],
        sets: ['A', 'B'],
        name: 'Venn Diagram',
      },
    ];

    return (
      <Plot
        data={data}
        layout={{ width: 400, height: 300 }}
      />
    );
  };

  return (
    <div>
      <h2>Dynamic Venn Diagram</h2>
      <div>
        <label>Value for Set A:</label>
        <input
          type="number"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
        />
      </div>
      <div>
        <label>Value for Set B:</label>
        <input
          type="number"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
        />
      </div>
      <button onClick={handleGenerateDiagram}>Generate Diagram</button>
      {/* Place Plotly.js Plot component here */}
      {handleGenerateDiagram()}
    </div>
  );
};

export default DynamicVennDiagram;
