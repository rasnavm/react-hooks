import React ,{useEffect, useState} from 'react';
import Willmountcom from './willmountcom';

function UseEffect()
 {
    const[value,setValue]=useState(0);
    const[flag,setFlag]=useState(true);

    useEffect(()=>{
        console.log('mounted')
    },[]);
    useEffect(()=>{
        console.log('--updted---')
    },[value]);
  return <div>
      <h1>count-{value}</h1>
      <button onClick={()=>setValue(prevcount=>prevcount+1)}>increment</button>
      {flag?<Willmountcom></Willmountcom>:null}
      <button onClick={()=>setFlag(false)}>unmount</button>
    
  </div>;
}

export default UseEffect;
