import React from 'react';
//import { UserContext1,ChannelContext1} from .;
import {UserContext1,ChannelContext1} from '../App'
function FuseContext() 
{
    return<div>
        <UserContext1.Consumer>
            {
            user =>
            <ChannelContext1.Consumer>
                {
                 channel=>
                 {
                    return<div>usecontext by {user}{channel}</div>
                 }
                     
                 
                }
            </ChannelContext1.Consumer>
            
                
            }
            
        </UserContext1.Consumer>
    </div>
    
}

export default FuseContext;
