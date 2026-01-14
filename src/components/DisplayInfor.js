import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, 
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          <span onClick={() => this.handleShowHide()}>Hide List Users: </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>Im {user.age} years old</div>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
