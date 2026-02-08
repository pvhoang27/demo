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
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
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
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
