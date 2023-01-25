import { useState, useEffect, useRef } from "react";

const TimerButton = ({ stopTimer, startTimer, timerIsActive }) => {
  const [buttonText, setButtonText] = useState("Start Timer");
  // const [buttonHeld, setButtonHeld] = useState(false);

  const handleTimerButton = () => {
    if(timerIsActive){
      stopTimer();
      setButtonText( () => "Start Timer")
    } else {
      startTimer();
      setButtonText( () => "Stop Timer")
    }
  };

  return (
    <>
      <button
        className="btn btn-wide btn-primary"
        onClick={handleTimerButton}
      >
        {buttonText}
      </button>
    </>
  );
};

export default TimerButton;

/* 
  holdCountID = setInterval(() => {
      holdTimer--;
      setButtonText(() => holdTimer);

      if (holdTimer === 0) {
        clearInterval(holdCountID);
        // holdCountID = null;
        setTimerPrimed(() => true);
        setButtonText(() => "Release when ready");
      }
    }, 1000);

  const [buttonText, setButtonText] = useState("Hold to Start")
  const [buttonHeld, setButtonHeld] = useState(false)
  const [holdTime, setHoldTime] = useState(3)
  const holdInterval = useRef(3)
  const [timerPrimed, setTimerPrimed] = useState(false)

  let holdTimerID;
  let buttonPrimerID;

  useEffect( () => {
    if(!buttonHeld) {
      clearInterval(holdInterval.current)
      holdInterval.current = null
    }
  }, [buttonHeld, holdInterval])

  const handleButtonPress = () => {
    setButtonHeld( () => true)
    setButtonText( () => holdTime)

    // holdTimerID = setInterval( () => {
    //   console.log(holdTime)
      // setHoldTime( prevTime => prevTime - 1 )
      // setButtonText( () => holdTime - 1 )
    // }, 1000)

    holdInterval.current = setInterval( () => {
      console.log(holdInterval.current)
      setHoldTime( prev => prev - 1 )
      // console.log(holdTime)
    }, 1000)

    buttonPrimerID = setTimeout( () => {
      setTimerPrimed( () => true )
      setButtonText( () => "Release when Ready" )
      clearInterval(holdTimerID)
      holdTimerID = null
    }, 10000)
  }

  const handleButtonRelease = () => {
    holdInterval.current = 3
    clearTimeout(buttonPrimerID)
    buttonPrimerID = null
    // setHoldTime( () => 3)
    setButtonHeld(false)
    setButtonText( () => timerPrimed ? "Hit spacebar to stop" : "Hold to Start")
  } */
