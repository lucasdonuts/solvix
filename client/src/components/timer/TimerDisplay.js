import { useEffect, useState } from 'react';

const TimerDisplay = ({ elapsedTime }) => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [milliseconds, setMilliseconds] = useState('00');

  const formatTime = (time) => {
    let ms = time % 100
    let s = Math.floor(time / 1000)
    let m = Math.floor(time / (60 * 1000))

    if(ms < 10){
      ms = '0' + ms.toString()
    }

    if(s < 10){
      s = '0' + s.toString()
    }

    if(m < 10){
      m = '0' + m.toString()
    }

    setMinutes(() => m)
    setSeconds(() => s)
    setMilliseconds(() => ms)
  }

  useEffect(() => {
    formatTime(elapsedTime)
  }, [elapsedTime])

  return(
    <span className="flex font-mono text-5xl place-content-center mb-3">
      <span><p>{minutes}</p></span>:
      <span><p>{seconds}</p></span>:
      <span><p>{milliseconds}</p></span>
    </span>
  )
}

export default TimerDisplay;