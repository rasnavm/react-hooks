import React,{useEffect, useState} from 'react';
import Willmountcom from './willmountcom';

function UseStEfHook() 
{
    const initialcount=0;
    const[count,setCount]=useState(initialcount);
    const[flag,setFlag]=useState(true);
    useEffect(()=>
    {
        console.log('mounted')
    },[]);
    useEffect(()=>
    {
        console.log('updated')
    },[count]);
    const handlecount=()=>
    {
        setCount(prevcount=>prevcount+1);
        
    }
    const inccount=()=>
    {   for(let i=0;i<5;i++)
        {
        setCount(prevcount=>prevcount+1)
        }
    }
   
  return <div>
      <h1>{count}</h1>
      <button onClick={handlecount}>increment</button>
      <button onClick={inccount}>increment5</button>
      {flag?<Willmountcom></Willmountcom>:null}
      <button onClick={()=>setFlag(false)}>unmount</button>
  </div>;
}

export default UseStEfHook;
