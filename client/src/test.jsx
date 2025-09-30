import { useEffect, useRef, useState } from 'react';

export default function Countdown({ initialSeconds = 64 }) {
  const [timer, setTimer] = useState(+initialSeconds);
  const timerFunction = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    timerFunction.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerFunction.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerFunction.current);
  }, []);

  return <div>{formatTime(timer)}</div>;
}
