import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo1 from "../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };  
  console.log("call me render ");

  useEffect(() => {
    console.log("call me useEffect ");
  });

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list user" : "Show list user"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => (
            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
              <div>My name is {user.name}</div>
              <div>Im {user.age} years old</div>
              <div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
              </div>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
