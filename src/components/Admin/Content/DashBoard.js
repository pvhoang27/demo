import "./DashBoard.scss";
const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <div className="title">Dashboard</div>
      <div className="content">
        <div className="c-left">
            <div className="child">Total users</div>
            <div className="child">Total quizess</div>
            <div className="child">Total questions</div>
            <div className="child">Total answers</div>
        </div>
        <div className="c-right">

        </div>
      </div>
    </div>
  );
};
export default Dashboard;
