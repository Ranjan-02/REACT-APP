import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log('count incrise');
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
