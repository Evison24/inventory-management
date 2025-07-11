import React from "react";

interface StatusCardProps {
  label: string;
  count: number;
  color: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, count, color }) => {
  return (
    <div className={`flex-1 rounded-md py-4 text-white text-center ${color}`}>
      <span className="font-medium">
        {count} {label}
      </span>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex gap-2 bg-white p-2 rounded-md shadow-sm">
        <StatusCard label="On Road" count={14} color="bg-yellow-300" />
        <StatusCard label="Completed" count={3} color="bg-green-500" />
        <StatusCard label="On Hold" count={2} color="bg-red-500" />
      </div>
    </div>
  );
};

export default Header;
