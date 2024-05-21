import React, { useRef } from 'react';

const ChangeBackgroundColor = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor =
        divRef.current.style.backgroundColor === 'red' ? 'blue' : 'red';
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'red',
        cursor: 'pointer'
      }}
    >
      Click me to change my background color
    </div>
  );
};

export default ChangeBackgroundColor;
