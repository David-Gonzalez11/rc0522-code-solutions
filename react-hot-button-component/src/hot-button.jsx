
import React, { useState } from 'react';
import './styles.css';

export default function HotButton() {
  const [count, setCount] = useState(0);

  const clicked =
    count <= 3
      ? 'btn3'
      : count <= 6
        ? 'btn6'
        : count <= 9
          ? 'btn9'
          : count <= 12
            ? 'btn12'
            : count <= 15
              ? 'btn15'
              : 'btn18';
  return (
    <>
      <h1>{count}</h1>
      <button className={clicked} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}
