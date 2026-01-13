import React from 'react';
class MyComponent extends React.Component {
  state = {
      name : 'Hoàng',
      address : 'Hà Nội',
      age : 22
    };  
    handleClick (event) {
      console.log('Button clicked!');
      console.log("My name is", this.state.name);
    }

    handleOnMouseOver (event) {
      console.log(event.pageX);
    }
  //jsx
  render() {

    return (
      <div>
        My name is {this.state.name} and im from {this.state.address}, im {this.state.age} years old.
        <button onMouseOver ={this.handleOnMouseOver}>Hover me</button>
        <button onClick={  this.handleClick}>Click me</button>
      
      </div>
    );
  }
}

export default MyComponent;