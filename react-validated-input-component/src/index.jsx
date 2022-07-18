import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidInput from './validated-input';
const element = (
  <div>
    <ValidInput />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
