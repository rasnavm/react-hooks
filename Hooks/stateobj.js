import React, { useState } from 'react';

function Stateobj() {
    const[name,setName]=useState({FirstName:'',LastName:''});
  return <div>
      <input type="text" name={name.FirstName} onChange={(e)=>setName({...name,FirstName:e.target.value})}></input>
      <input type="text" name={name.LastName} onChange={(e)=>setName({...name,LastName:e.target.value})}></input>
      <h1>{name.FirstName}{name.LastName}</h1>
  </div>;
}

export default Stateobj;
