import React, { Component } from 'react';
import axios from 'axios';

 class GetApi extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          list:[],
       }
     }
     fetchHandler=()=>
     {
         /* fetch("https://jsonplaceholder.typicode.com/users").then(Response=>Response.json())
         .then(result=>this.setState({list:result})); */
         axios.get("https://jsonplaceholder.typicode.com/users").then(Response=>this.setState({list:Response.data}));
     }
  render() {
    return <div>
        <button onClick={this.fetchHandler}>fetch</button>
        <ul>
            {this.state.list.map((val,index)=><li key={index}>{val.name}</li>)}
        </ul>
    </div>
  }
}
export default GetApi;
