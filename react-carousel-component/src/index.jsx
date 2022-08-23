import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';
const images = [
  {
    id: 1,
    image: '../dist/images/025.png'
  },
  {
    id: 2,
    image: '../dist/images/001.png'

  },
  {
    id: 3,
    image: '../dist/images/004.png'
  },
  {
    id: 4,
    image: '../dist/images/007.png'
  },
  {
    id: 5,
    image: '../dist/images/039.png'
  }

];
const element = (
<Carousel images={images} />
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
