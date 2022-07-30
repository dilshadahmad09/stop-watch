import React from 'react'

const BtnComponent = ({start}) => {
  return (
    <div>
        <button onClick={start} className='stopwatch-btn stopwatch-btn-gre'>Start</button>
    </div>
  )
}

export default BtnComponent;