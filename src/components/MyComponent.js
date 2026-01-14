import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Hoàng",
    address: "Hà Nội",
    age: 22,
  };
  handleClick = (event) => {
    console.log("Button clicked!");
    // console.log("My name is", this.state.name);
    // console.log("random",);

    this.setState({
      name: "Nguyễn Văn A",
      age: Math.floor(Math.random() * 100),
    });
    // this.setState({
    // age : Math.floor(Math.random() * 100)
    // });
  };

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }
  handleOnChangeInput = (event) => {
    console.log(event.target.value);
  };
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and im from {this.state.address}, im{" "}
        {this.state.age} years old.
        <form>
          <input type="text" onChange={this.handleOnChangeInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
