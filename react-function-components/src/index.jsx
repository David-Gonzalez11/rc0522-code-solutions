import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click me!</button>;
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
const custom = <CustomButton />;
root.render(custom);
