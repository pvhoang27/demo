import "./DashBoard.scss";
const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <div className="title">Dashboard</div>
      <div className="content">
        <div className="c-left">
            <div>Total users</div>
            <div>Total quizess</div>
            <div>Total questions</div>
            <div>Total answers</div>
        </div>
        <div className="c-right">

        </div>
      </div>
    </div>
  );
};
export default Dashboard;
