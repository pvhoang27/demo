import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User/User";
import Admin from "./Admin/Admin";
import HomePage from "./Home/HomePage";
import ManagerUser from "./Admin/Content/ManagerUser";
import Dashboard from "./Admin/Content/DashBoard";
import Login from "./Auth/Login";
import App from "../App";
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<User />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManagerUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Layout;
