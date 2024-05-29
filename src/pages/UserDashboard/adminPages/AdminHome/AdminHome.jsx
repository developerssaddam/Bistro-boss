import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import {
  FaCar,
  FaMoneyCheckDollar,
  FaProductHunt,
  FaUsers,
} from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Load adminStats data
  const { data: adminStats = {} } = useQuery({
    queryKey: ["totalRevinew"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Load chart data
  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order/stats");
      return res.data;
    },
  });

  // Barchart custom function
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Pie chart custom function
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // PieChart data
  const data = chartData.map((item) => {
    return {
      name: item.category,
      value: item.revinew,
    };
  });

  return (
    <div className="p-8">
      <Helmet>
        <title>Bistro-Boss | Admin-Home</title>
      </Helmet>

      <h1 className="text-2xl font-semibold">
        Hi, Wellcome {user ? user.displayName : "Back"}
      </h1>

      <div className="flex gap-5 items-center text-white my-5">
        <div className="shadow-sm p-2 bg-[#DD86FA] rounded-lg">
          <div className="flex gap-8 items-center">
            <FaMoneyCheckDollar className="text-3xl font-semibold" />
            <div className=" font-semibold">
              <p className="text-3xl"> {adminStats.totalRevinew?.toFixed(2)}</p>
              <p>Revinew</p>
            </div>
          </div>
        </div>

        <div className="shadow-sm p-2 bg-[#bab62f] rounded-lg">
          <div className="flex gap-8 items-center">
            <FaUsers className="text-3xl font-semibold" />
            <div className=" font-semibold">
              <p className="text-3xl"> {adminStats.totalUsers}</p>
              <p>Customers</p>
            </div>
          </div>
        </div>

        <div className="shadow-sm p-2 bg-[#cb2f77] rounded-lg">
          <div className="flex gap-8 items-center">
            <FaProductHunt className="text-3xl font-semibold" />
            <div className=" font-semibold">
              <p className="text-3xl"> {adminStats.totalMenu}</p>
              <p>Products</p>
            </div>
          </div>
        </div>

        <div className="shadow-sm p-2 bg-[#6b97e9] rounded-lg">
          <div className="flex gap-8 items-center">
            <FaCar className="text-3xl font-semibold" />
            <div className=" font-semibold">
              <p className="text-3xl"> {adminStats.totalOrders}</p>
              <p>Orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart area */}

      <div className="flex gap-10">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Legend></Legend>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
