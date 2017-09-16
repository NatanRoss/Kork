import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import App from './App';
import Grid from './grid';
import Calendar from './calendar'


ReactDOM.render(<div><Calendar /><App /><Grid /></div>, document.getElementById('root'));

