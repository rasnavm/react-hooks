import React from "react";
/* import Click from "./HOc/click";
import Hover from "./HOc/hover"; */
/* 
import GetApi from "./fetch/get";
import Cusecontext from "./Hooks/cusecontext";
import UseStEfHook from "./Hooks/Hook1&2";
import Stateobj from "./Hooks/stateobj";
import UseEffect from "./Hooks/useEffect";
import UseEffect2 from "./Hooks/useEffect2";
import StateCounter from "./Hooks/usestate"; */
/* import P from "./Hooks/P"; */
 import X from "./Hooks/X"; 
/* export const MyContext=React.createContext(); */
/* export const UserContext1=React.createContext();
export const ChannelContext1=React.createContext(); */

export const ParentContext=React.createContext();
export const ChildContext=React.createContext();
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <MyContext.Provider value={'Rasna'}><P></P></MyContext.Provider> */}
      
      {/* <Stateobj></Stateobj> */}
        {/* <UserContext1.Provider value={'rasna'}>
        <ChannelContext1.Provider value={'UI'} >
        <Cusecontext></Cusecontext>
        </ChannelContext1.Provider>
      </UserContext1.Provider>
 */} 
      
      {/* <GetApi></GetApi>
     <StateCounter></StateCounter>
      <UseEffect></UseEffect>
      <UseEffect2></UseEffect2> */}
      {/* <UseStEfHook></UseStEfHook> */}
      <ParentContext.Provider value={'john'}>
        <ChildContext.Provider value={'doe'}>
        <X></X>
        </ChildContext.Provider>
      </ParentContext.Provider>
         
        {/* <Click></Click>
      <Hover></Hover> */}
    </div>
  );
}

export default App;
