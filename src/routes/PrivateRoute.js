import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  console.log(">>> check props in private route: ", props);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
