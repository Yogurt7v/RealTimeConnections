import { useEffect, useRef, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('counter');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (isNaN(parsed)) {
        return 0;
      } else {
        return parsed > 10 ? 0 : parsed;
      }
    } else {
      return 0;
    }
  });
  const ref = useRef(null);

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

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
