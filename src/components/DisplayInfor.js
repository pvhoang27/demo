import React from "react";

class DisplayInfor extends React.Component {
  handleShowHide = () => {
    alert("click me");
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          <span onClick={() => this.handleShowHide()}>Hide List Users: </span>
        </div>
        {listUsers.map((user) => (
          <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
            <div>My name is {user.name}</div>
            <div>Im {user.age} years old</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayInfor;
