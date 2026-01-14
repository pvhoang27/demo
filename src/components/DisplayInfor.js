import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(">>> check props:", this.props);
    return (
      <div> 
        <div>My name is Hoang</div>
        <div>Im 22 years old</div>
      </div>
    );
  }
}

export default DisplayInfor;