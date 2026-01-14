import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //jsx
  render() {
    return (
      <div>
        <Userinfor />
        <DisplayInfor />
      </div>
    );
  }
}

export default MyComponent;
