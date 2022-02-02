import React, { useEffect } from 'react';

function Willmountcom() {
    useEffect(()=>
    {
        return(()=>console.log('unmounted'))
    },[]);
  return <div>
      <h1>hello counter</h1>
  </div>;
}

export default Willmountcom;
