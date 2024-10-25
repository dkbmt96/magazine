import React from "react";

const Dropdown: React.FC<{ options: string[]; label: string }> = ({
  options,
  label,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const mouseEnter = () => {
    setIsOpen(true);
  };

  const mouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative flex"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="flex justify-between items-center p-2 hover:bg-gray-200 cursor-pointer">
        <span>{label}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </div>
      {isOpen && (
        <div className="absolute border bg-white w-full mt-1 top-12 z-20">
          {options.map((option, index) => (
            <div key={index} className="p-2 hover:bg-gray-300 cursor-pointer">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
