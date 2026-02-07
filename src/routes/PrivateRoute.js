import Test1 from "./Test1";
import Test2 from "./Test2";

const PrivateRoute = (props) => {
  return (
  <div>Private Route
    <Test2 >
        <Test1 />
    </Test2>
  
  </div>
  );
}

export default PrivateRoute;