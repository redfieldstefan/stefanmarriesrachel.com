import React from 'react';
import classnames from 'classnames';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/Routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
    	<Router>
    		<Routes />
    	</Router>
    </div>
  );
}

export default App;
