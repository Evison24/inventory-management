import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./screens/Dashboard";
import InventoryDashboard from "./screens/InventoryDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory_dashboard/:jobId" element={<InventoryDashboard />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
