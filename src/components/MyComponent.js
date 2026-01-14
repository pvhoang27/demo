import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //jsx
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <Userinfor />
        <br></br>
        <DisplayInfor name="TIeennenen" age="20" />
        <hr></hr>
        <DisplayInfor name={"TIeennenen"} age={21} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
