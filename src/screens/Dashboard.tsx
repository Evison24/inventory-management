import DataTable from "../components/DataTable/DataTable";
import Header from "../components/Header/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 p-4">
      <Header />
      <DataTable />
    </div>
  );
};

export default Dashboard;
