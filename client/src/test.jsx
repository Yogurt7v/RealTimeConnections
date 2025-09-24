import { useRef, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <button onClick={() => setCount(count + 1)} disabled={count >= 10} ref={ref}>
        Нажми на меня
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(0);
          ref.current.focus();
        }}
      >
        Сбросить
      </button>
    </>
  );
}
