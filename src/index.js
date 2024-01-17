import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.css';

import EnduranceWorld from './components/EnduranceWorld';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EnduranceWorld bgColor='#141622' />
  </React.StrictMode>
)