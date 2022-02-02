import React from 'react';
import { ParentContext,ChildContext } from '../App';

function Z() {
  return <div>
      <ParentContext.Consumer>
          {
            user=>
            <ChildContext.Consumer>
                {
                    channel=>
                    {
                        
                            return(<div>context provided by{user}{channel}</div>)
                      
                    }
                }
            </ChildContext.Consumer>
          
        }
      </ParentContext.Consumer> 
  </div>;
}

export default Z;
