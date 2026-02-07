import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  console.log(">>> check props in private route: ", props);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return <>{props.children}</>;
};

export default PrivateRoute;
