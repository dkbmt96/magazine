import React from "react";

const Button: React.FC<{
  children: string;
  onClick(event: any): void;
  cls?: string;
  type?: 'button' | 'submit'
}> = ({ children, onClick, cls, type = "button" }) => {
  return (
    <button
      type={type}
      className={`border-solid border-2 px-2 text-bold hover:bg-gray-200 ${cls}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
