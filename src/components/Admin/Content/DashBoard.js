import "./DashBoard.scss";
import { BarChart, Line } from "recharts";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Dashboard = (props) => {
  const data = [
    {
      name: "Quizzes",
      Qz: 4000,
    },
    {
      name: "Questions",
      Qz: 3000,
    },

    {
      name: "Answers",
      As: 2780,
    },
  ];
  return (
    <div className="dashboard-container">
      <div className="title">Dashboard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">
            <span className="text-1">Total users</span>
            <span className="text-2">100</span>
          </div>
          <div className="child">
            <span className="text-1">Total quizzes</span>
            <span className="text-2">50</span>
          </div>
          <div className="child">
            <span className="text-1">Total questions</span>
            <span className="text-2">200</span>
          </div>
          <div className="child">
            <span className="text-1">Total answers</span>
            <span className="text-2">400</span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width="95%" height="100%">
            <BarChart data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="Qz" fill="#8884d8" />
              <Bar dataKey="Qs" fill="#82ca9d" />
              <Bar dataKey="As" fill="#ccc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
