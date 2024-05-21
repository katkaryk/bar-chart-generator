import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import { extractPathname} from './Components/helper'; 

const App = () => {
  const state = extractPathname();
  console.log(state);
  return (
    <Router>
      <div>
        <Header/>
        <Home/>
      </div>
    </Router>
  );
};

export default App;
