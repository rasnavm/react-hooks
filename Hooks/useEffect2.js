import React, { useEffect, useState ,useRef} from 'react';

function UseEffect2() {
    const[timer,setTimer]=useState(0);
   const inputref=useRef();
    useEffect(()=>
    {
       inputref.current= setInterval(()=>setTimer(prevtimer=>prevtimer+1),1000);
        return ()=>clearInterval(inputref.current);
        console.log('---render----');
    },[]);

  return (<div>
      count-{timer}
      <button  onClick={()=>clearInterval(inputref.current)}>clear</button>
  </div>)
}

export default UseEffect2;
