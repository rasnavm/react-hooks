import React, { useContext } from 'react';
import FuseContext from './fuseContext';
import {UserContext1,ChannelContext1} from '../App'
 
function Eusecontext()
 {
     const user=useContext(UserContext1);
     const channel=useContext(ChannelContext1);
  return <div>
      <div>context by {user}{channel}</div>
      <FuseContext></FuseContext>
  </div>;
}
export default Eusecontext;