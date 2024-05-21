import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Auto focus on mount" />
    </div>
  );
};

export default AutoFocusInput;
