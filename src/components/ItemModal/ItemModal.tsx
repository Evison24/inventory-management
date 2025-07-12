import React, { useState, FormEvent } from "react";
import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export interface Item {
  id: number;
  item: string;
  quantity: number;
  description: string;
  notes: string;
}

interface ItemModalProps {
  item: Item;
  onClose: () => void;
  onSave: (updated: Item) => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onSave }) => {
  const [form, setForm] = useState<Item>({ ...item });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl mt-20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Edit Item #{item.id}</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Info text */}
        <div className="flex items-center px-6 py-3 text-gray-600 border-b">
          <InformationCircleIcon className="h-5 w-5 mr-2 text-blue-400" />
          <span>
            Informative piece of text that can be used regarding this modal.
          </span>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-8">
              <label className="block text-sm font-medium text-gray-700">
                Item
              </label>
              <select
                name="item"
                value={form.item}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
              >
                {/* in a real app you'd map your items list */}
                <option value={form.item}>{form.item}</option>
              </select>
            </div>
            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Set Quantity"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Type the description…"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Type a note…"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center px-6 py-4 border-t">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600"
          >
            Save Changes
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemModal;
