import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { age, name } = this.props;
    console.log(">>> check props:", this.props);
    return (
      <div>
        <div>My name is {name}</div>
        <div>Im {age} years old</div>
      </div>
    );
  }
}

export default DisplayInfor;
