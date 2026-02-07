import Test1 from "./Test1";
import Test2 from "./Test2";

const PrivateRoute = (props) => {
    console.log('>>> check props in private route: ', props);
  return (
  <>

  {props.children }
  </>
  );
}

export default PrivateRoute;