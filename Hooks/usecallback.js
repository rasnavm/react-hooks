import React, { useState } from 'react';
import Button from './Button';
import Count from './count';
import Title from './title';

function usecallback()
 {
     const[age,setAge]=useState(25);
     const[salary,setSalary]=useState(50000);
  return <div>
      <Title/>
      <Count text="Age" count={age} ></Count>
      <Button handleclick={increment}>inc Age</Button>
      <Count text="salary" count={salary}></Count>
      <Button handleclick={incrementSal}>inc Sal</Button>
  </div>;
}

 export default usecallback;
