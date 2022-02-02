import React,{useContext} from 'react';
import Z from './Z';
import {ParentContext,ChildContext} from '../App'
function Y() {
    const user1=useContext(ParentContext);
    const channel=useContext(ChildContext);
  return <div>
      {user1}{channel}
      <Z></Z>
  </div>;
}

export default Y;
