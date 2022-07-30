import React from 'react'

const BtnComponent = ({start, status, stop, reset, resume}) => {
  return (
    <div>
        {
           status === 0 ? <button onClick={start} className='stopwatch-btn stopwatch-btn-gre'>Start</button> : ""

        }
        
        {
            (status === 1) ?
             <div>
                <button onClick={stop} className='stopwatch-btn stopwatch-btn-red'>Stop</button> 
                <button onClick={reset} className='stopwatch-btn stopwatch-btn-yel'>Reset</button> 
             </div> :""
            
        }

        {
            (status === 2) ?
            <div>
            <button onClick={resume} className='stopwatch-btn stopwatch-btn-gre'>Resume</button> 
            <button onClick={reset} className='stopwatch-btn stopwatch-btn-yel'>Reset</button> 
         </div> :""
        }
    </div>
  )
}

export default BtnComponent;