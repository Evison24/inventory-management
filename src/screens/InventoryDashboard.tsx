import { useParams } from "react-router";

const InventoryDashboard = () => {
  const { jobId } = useParams();
  console.log(jobId, "jobId");
  return <div>InventoryDashboard</div>;
};

export default InventoryDashboard;
