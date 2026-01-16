import React from "react";
import "./DisplayInfor.scss";
import logo1 from "../logo.svg";
// class DisplayInfor extends React.Component {
  
//   render() {
//     console.log(">>> call me render ");
//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">
      
//         {true && (
//           <>
//             {listUsers.map((user, index) => (
//               <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                 <div>My name is {user.name}</div>
//                 <div>Im {user.age} years old</div>
//                 <div>
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     Delete
//                   </button>
//                 </div>
//                 <hr />
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = () => {
    const { listUsers } = this.props;

    
    return (
      <div className="display-infor-container">
      
        {true && (
          <>
            {listUsers.map((user, index) => (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>Im {user.age} years old</div>
                <div>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
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
  
}
export default DisplayInfor;
