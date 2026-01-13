import React from 'react';
class MyComponent extends React.Component {
  state = {
      name : 'Hoàng',
      address : 'Hà Nội',
      age : 22
    };  
    handleClick = () => {
      console.log('Button clicked!');
    }
  //jsx
  render() {

    return (
      <div>
        My name is {this.state.name} and im from {this.state.address}, im {this.state.age} years old.
        <button onClick={this.handleClick}>Click me</button>
      
      </div>
    );
  }
}

export default MyComponent;