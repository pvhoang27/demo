import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../service/apiService";

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} size="xl">
//         <Modal.Header closeButton>
//           <Modal.Title>Add new user</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form className="row g-3">
//             <div className="col-md-6">
//               <label className="form-label">Email</label>
//               <input type="email" className="form-control" />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Password</label>
//               <input type="password" className="form-control" />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Username</label>
//               <input type="text" className="form-control" />
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Role</label>
//               <select className="form-select">
//                 <option selected value="USER">
//                   USERS
//                 </option>
//                 <option value="ADMIN"> ADMIN</option>
//               </select>
//             </div>
//             <div className="col-md-12">
//               <label className="form-label">Image</label>
//               <input type="file" />
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

const ManagerUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  useEffect(async () => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const testFunction = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  }



  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManagerUser;
