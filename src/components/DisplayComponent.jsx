import React,{useState} from 'react'

const DisplayComponent = ({time}) => {
   const hourBtn = ()=>{
       if(time.h === 0){
           return '';
       }else{
          return <span>{time.h >=10? time.h : "0" + time.h }</span>;
       }
   }
  return (
    <div>
         {hourBtn()}&nbsp;&nbsp;
        <span>{time.m >=10? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
        <span>{time.s >=10? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
        <span>{time.ms >=10? time.ms : "0" + time.ms}</span>&nbsp;
    </div>
  )
}

export default DisplayComponent