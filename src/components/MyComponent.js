import React from 'react';
class MyComponent extends React.Component {
  state = {
      name : 'Hoàng',
      address : 'Hà Nội',
      age : 22
    };  
    handleClick= (event ) => {
      console.log('Button clicked!');
      // console.log("My name is", this.state.name);
      // console.log("random",);
      
      this.setState({
        name : 'Nguyễn Văn A',
        age : Math.floor(Math.random() * 100)
      });
      // this.setState({
        // age : Math.floor(Math.random() * 100)
      // });
    }
    
    handleOnMouseOver (event) {
      // console.log(event.pageX);
    }
    handleOnChangeInput = (event) => {
      this.setState({
        name : event.target.value
      });
    }
    handleOnChangeAge = (event) => {
      this.setState({
        age : event.target.value
      });
    }

    handleOnSubmit = (event) => {
      event.preventDefault();
      console.log('>>> check submit:', this.state.name);
    }
  //jsx
  render() {

    return (
      <div>

        My name is {this.state.name} and im from {this.state.address}, im {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Name:</label>
          <input 
          value={this.state.name}
          type="text" 
          onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Age:</label>
          <input 
          value={this.state.age}
          type="text" 
          onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;