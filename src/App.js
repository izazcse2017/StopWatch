import './App.css';
import { useTimer } from 'use-timer';  // Importing the useTimer hook from the use-timer package


function App() {

  const { time, start, pause, reset, status } = useTimer();  // Using the useTimer hook and destructuring its return values
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}></div>
      <div>
      {/* Button to start the timer, calls the start function from useTimer when clicked
      Button to pause the timer, calls the pause function from useTimer when clicked
      Button to reset the timer, calls the reset function from useTimer when clicked */}

        <button onClick={start}>Start</button>  
        <button onClick={pause}>Pause</button> 
        <button onClick={reset}>Reset</button> 
        
        {/* Conditionally renders Resume button if the timer is paused */}
        
        {status === "PAUSED" && <button onClick={start}>Resume</button>} 
      </div>
      
      
      {/* Displaying the current time value from the timer */}
      <p>Start Timer : {time}</p> 
      
      {/* Conditionally rendering a paragraph indicating that the timer is running */}
      {status === "RUNNING" && <p>RUNNING....</p>} 
    </>
  );
}

export default App;
