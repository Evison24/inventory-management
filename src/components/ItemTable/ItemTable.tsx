import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ItemModal, { Item } from "../ItemModal/ItemModal";

interface ItemTableProps {
  title: string;
  data: Item[];
}

const ItemTable: React.FC<ItemTableProps> = ({ title, data }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Item | null>(null);

  const filtered = data.filter((it) =>
    [it.item, it.description, it.notes].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleSave = (updated: Item) => {
    // 👉 here you’d e.g. call your API or update state
    console.log("saving", updated);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start p-8">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-md font-semibold">{title}</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search a driver"
              className="px-3 py-1.5 rounded-md border text-sm text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="text-gray-400 hover:text-gray-700">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-600">Nr.</th>
                <th className="px-4 py-2 font-medium text-gray-600">Item</th>
                <th className="px-4 py-2 font-medium text-gray-600">
                  Quantity
                </th>
                <th className="px-4 py-2 font-medium text-gray-600">
                  Description
                </th>
                <th className="px-4 py-2 font-medium text-gray-600">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((it) => (
                <tr
                  key={it.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelected(it)}
                >
                  <td className="px-4 py-2">{it.id}</td>
                  <td className="px-4 py-2">{it.item}</td>
                  <td className="px-4 py-2">{it.quantity}</td>
                  <td className="px-4 py-2">{it.description}</td>
                  <td className="px-4 py-2">{it.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ItemModal
          item={selected}
          onClose={() => setSelected(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ItemTable;
