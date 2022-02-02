import React ,{useEffect, useState}from 'react';
import Willmountcom from './willmountcom';
function StateCounter()
 {
     let initialcount=0;
     const[count,setCount]=useState(initialcount);
     const[flag,setFlag]=useState(true);
     useEffect(()=>{console.log('mounted')},[]);
     useEffect(()=>{console.log('updated')},[count]);
  return <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>increment</button>

      <button onClick={()=>setCount(prevcount=>prevcount-1)}>decrement</button>

      <button onClick={()=>setCount(initialcount)}>Reset</button>
      <button  onClick={()=>setCount(prevcount=>prevcount+5)}>increment5</button>
     {flag?<Willmountcom></Willmountcom>:null}
     <button onClick={()=>setFlag(false)}>unmount</button>

  </div>
}

export default StateCounter;
