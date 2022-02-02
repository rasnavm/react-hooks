import React, { useState } from 'react';

function UseStateCounter1() 
{
    let initialcount=0;
    const[count,setCount]=useState(initialcount);

  return <div>
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>incrementone</button>
      <button onClick={()=>setCount(prevcount=>prevcount-1)}>decrementone</button>
      <button onClick={()=>setCount(initialcount)}>Reset</button>
  </div>;
}

export default UseStateCounter1;
