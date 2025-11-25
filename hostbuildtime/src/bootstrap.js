import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

async function initApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

initApp();
