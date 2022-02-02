import React from 'react';
const UpdaterComponent=(WrapperComponent)=>
{
    return class NewComponent extends React.Component
    {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0,
            }
          }
          handlecount=()=>
          {
              this.setState({count:this.state.count+1})
          }
          render()
          {
              return(
                  <div>
                      <WrapperComponent count={this.state.count} increment={this.handlecount}></WrapperComponent>
                  </div>
              )
          }
    }
}
export default UpdaterComponent;
