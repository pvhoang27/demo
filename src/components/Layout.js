import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User/User";
import Admin from "./Admin/Admin";
import HomePage from "./Home/HomePage";
import ManagerUser from "./Admin/Content/ManagerUser";
import Dashboard from "./Admin/Content/DashBoard";
import Login from "./Auth/Login";
import App from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Auth/Register";
import ListQuiz from "./User/ListQuiz";
import DetailQuiz from "./User/DetailQuiz";
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManagerUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
