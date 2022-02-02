import React, { Component } from 'react';
import UpdaterComponent from './update';

 class Hover extends Component {
     /* constructor(props) {
       super(props)
     
       this.state = {
          count:0
       }
     }
     handlecount=()=>
     {
         this.setState({count:this.state.count+1})
     }
      */
  render() {
    return <div>
        <h1>{this.props.count}</h1>
        <button onMouseOver={this.props.increment}>incrementbyHover</button>
    </div>;
  }
}
export default UpdaterComponent(Hover);
