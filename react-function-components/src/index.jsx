import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button> Click me!</button>;
}

const container = document.querySelector('#root');
const element = <CustomButton />;
const root = ReactDOM.createRoot(container);
root.render(element);
