import { useEffect, useRef, useState } from 'react';

export default function Countdown({ initialSeconds = 64 }) {
  const [timer, setTimer] = useState(+initialSeconds);
  const timerFunction = useRef(null);
  const [stopped, setStopped] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (timerFunction.current) return; // Если уже запущен
    timerFunction.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setStopped(false);
  };

  const stopTimer = () => {
    if (timerFunction.current) {
      clearInterval(timerFunction.current);
      timerFunction.current = null;
      setStopped(true);
    }
  };

  const reset = () => {
    if (timer > 0) {
      setTimer(initialSeconds);
    }
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

  return (
    <>
      <div>{formatTime(timer)}</div>
      <div>
        <button onClick={reset}>Сбросить</button>
      </div>
      <button onClick={stopped ? startTimer : stopTimer}>
        {!stopped ? <span>Пауза</span> : <span>Возобновить</span>}
      </button>
    </>
  );
}
