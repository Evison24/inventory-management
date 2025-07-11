import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ArrowIcon from "../assets/arrowIcon.svg";
import { DropdownType, type SelectionType } from "../types/dropdownType";
import XIcon from "../assets/xIcon.svg";
export interface Selection {
  id: string | number;
  value: string;
  text: string;
}

interface DropdownProps {
  label: string;
  type: DropdownType;
  values: SelectionType[];
  selections: Selection[];
  onChange: (selection: Selection, type: DropdownType) => void;
  className?: string;
  handleRemove: (id: number) => void;
}

export default function Dropdown({ label, type, values, selections, onChange, handleRemove, className = "" }: DropdownProps) {
  return (
    <div className={className}>
      <Menu as="div">
        {({ open }) => (
          <>
            <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>

            <MenuButton
              className={`
              inline-flex w-full items-center justify-between gap-x-1.5
              rounded-md bg-[#F5F5F7] px-3 py-2 text-sm  ring-0
              ${open ? "rounded-b-none" : ""}
            `}
            >
              <span>{values?.text ? values?.text : <div className="text-[#E0E0E1]">Select...</div>}</span>
              <img alt="arrow_icon" src={ArrowIcon} className={`h-3 w-3 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
            </MenuButton>

            <MenuItems className="absolute w-full right-0 z-10 origin-top-right rounded-b-md bg-white shadow-sm border border-[#EFEFEF] focus:outline-none">
              {selections.map((opt) => (
                <MenuItem key={opt.id} as="div">
                  {({ active }) => (
                    <button
                      onClick={() => onChange(opt, type)}
                      className={`
                      block w-full text-left px-4 py-2 text-sm
                      ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}
                    `}
                    >
                      {opt.text}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </>
        )}
      </Menu>
      {type === DropdownType.CATEGORY && (
        <div className="flex items-center text-sm gap-3 p-2">
          {values?.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-[5px] text-sm">
                <div style={{ backgroundColor: item.colorCode }} className={`w-3 h-3 rounded-full`}></div>
                {item?.text}{" "}
                <button className=" bg-[#FE4C4A] hover:bg-[#FE4C4A]/90 h-[18px] text-white rounded-sm px-2" onClick={() => handleRemove(item.id)}>
                  <img src={XIcon} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
