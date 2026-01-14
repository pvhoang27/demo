import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Tien", age: 16 },
      { id: 2, name: "An", age: 21 },
      { id: 3, name: "Binh", age: 30 },
    ],
  };
  //jsx
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <Userinfor />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
        <hr></hr>
      </div>
    );
  }
}

export default MyComponent;
