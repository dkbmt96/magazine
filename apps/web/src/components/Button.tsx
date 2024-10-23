import React from "react";

const Button: React.FC<{
  children: string;
  onClick(event: any): void;
  cls?: string;
}> = ({ children, onClick, cls }) => {
  return (
    <button
      type="button"
      className={`border-solid border-2 px-2 text-bold hover:bg-gray-200 ${cls}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
