import React from "react";
import UpdaterComponent from "./update";
class Click extends React.Component
{
   /*  constructor(props)
     {
      super(props);
    this.state = {
         count:0,
      }
    }
    handlecount=()=>
    {
        this.setState({count:this.state.count+1});
    } */
    render()
    {
        
        return(
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment}>increment</button>
            </div>
        )
    }
    
}
export default UpdaterComponent(Click);
