import React from 'react';
import {MyContext} from '../App'
function R() {
  return <div>
      <MyContext.Consumer>
          {
              user=>
              {
                  return <div>context created by {user}</div>
              }
          }
      </MyContext.Consumer>
  </div>;
}

export default R;
