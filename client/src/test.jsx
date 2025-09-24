import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>{count}</div>
      <button onClick={(prev) => setCount(prev + 1)}>Нажми на меня</button>
    </div>
  );
};

export default Counter;
