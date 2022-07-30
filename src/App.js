import React, {useState} from 'react'
import './App.css';
import BtnComponent from './components/BtnComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = ()=>{
    // run();
    setStatus(1)
    setInterv(setInterval(run, 10))
    
  }

  let updatedMs=time.ms, updatedS=time.s, updatedM=time.m, updatedH=time.h;
  const run = ()=>{
    if(updatedM === 60){
       updatedH++;
       updatedM=0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs=0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const stop = ()=>{
    setStatus(2)
    clearInterval(interv);
  }

  const reset = ()=>{

  }

  const resume = ()=>{

  }
  return (
    <div className="App">
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
          <DisplayComponent time={time}/>
            <BtnComponent stop={stop} status={status} start={start} resume={resume}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
