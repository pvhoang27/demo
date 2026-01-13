import React from 'react';
class MyComponent extends React.Component {
  state = {
      name : 'Hoàng',
      address : 'Hà Nội',
      age : 22
    };  
  //jsx
  render() {

    return (
      <div>
        My name is {this.state.name} and im from {this.state.address}, im {this.state.age} years old.
      
      </div>
    );
  }
}

export default MyComponent;