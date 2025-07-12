import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  children: ReactNode;
  buttonClass?: string;
  dividerClass?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  buttonClass = "bg-gray-300 hover:bg-gray-400",
  dividerClass = "bg-black",
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`
         ${buttonClass}
        bg-gray-300
        text-gray-800 font-bold
        px-4 rounded
        flex items-center
      `}
    >
      <span className="py-2">{children}</span>
      <div className={`w-1 self-stretch mx-2 ${dividerClass}`} />
      <span className="flex items-center w-4 h-4 mr-2 py-2">
        <img src={icon} alt="icon" className="w-5 h-5 object-contain" />
      </span>
    </button>
  );
};

export default IconButton;
