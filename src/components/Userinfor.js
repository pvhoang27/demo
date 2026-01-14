import React from "react";

class Userinfor extends React.Component {
  state = {
    name: "Hoàng",
    address: "Hà Nội",
    age: 22,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check submit:", this.state.name);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and im from {this.state.address}, im{" "}
        {this.state.age} years old.
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

export default Userinfor;
