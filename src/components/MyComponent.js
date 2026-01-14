import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //jsx
  render() {
    return (
      <div>
        <Userinfor />
        <br></br>
        <DisplayInfor name="TIeennenen" age="20" />
        <hr></hr>
        <DisplayInfor name="TIeennenen" age="20" />
      </div>
    );
  }
}

export default MyComponent;
