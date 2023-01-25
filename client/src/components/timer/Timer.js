import { useEffect, useState, useRef } from "react";
import TimerButton from './TimerButton';
import TimerDisplay from './TimerDisplay';

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    setElapsedTime(0);

    const startTime = Date.now();
    
    timerRef.current = setInterval(() => {
      setElapsedTime(() => Date.now() - startTime)
    }, 100)

    setTimerIsActive(() => true)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setTimerIsActive(() => false)
  }

  return (
    <div className="bg-orange-700 p-8">
      {/* Time display */}
      <TimerDisplay
        elapsedTime={ elapsedTime }
      />
      {/* Start/stop button */}
      <TimerButton
        startTimer={ startTimer }
        stopTimer={ stopTimer }
        timerIsActive={ timerIsActive }
      />
    </div>
  );
};

export default Timer;
