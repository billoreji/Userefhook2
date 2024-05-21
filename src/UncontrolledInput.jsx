import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current) {
      document.getElementById('display').innerText = inputRef.current.value;
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
      />
      <p id="display"></p>
    </div>
  );
};

export default UncontrolledInput;
