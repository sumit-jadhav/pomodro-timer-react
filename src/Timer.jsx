import React, { useState, useEffect } from "react"

function Timer() {
  const [time, setTime] = useState(1500) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [breakTime, setBreakTime] = useState(false)

  useEffect(() => {
    let interval

    if (time === 0 && breakTime === false) {
      setBreakTime(true)
      setTime(300)
    }
    if (time == 0 && breakTime === true) {
      setBreakTime(false)
      setTime(1500)
    }
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }

    if (!isRunning || time <= 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning, time])

  const startTimer = () => {
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setTime(1500)
    setIsRunning(false)
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0")
    return `${minutes}:${remainingSeconds}`
  }

  return (
    <div>
      {breakTime == false ? <h2>Work Time!!</h2> : <h2>Break Time!!</h2>}
      <p>{formatTime(time)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer
