import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div>
        {listUsers.map((user) => {
          return ( 
            <div key ={user.id}>
              <div>My name is {user.name}</div>
              <div>Im {user.age} years old</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>Im {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>Im {age} years old</div>
        <hr />
        <div>My name is {name}</div>
        <div>Im {age} years old</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
