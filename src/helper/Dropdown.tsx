import { useState, useRef } from "react";
import { Link } from "react-router-dom";


type DropdownProps = {
  buttonLabel: string;
  options: { label: string; href: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        id="dropdownButton"
        className="text-gray-900 dark:text-[#5d0000] font-medium text-sm inline-flex items-center"
      >
        {buttonLabel}
        <svg className="w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 bg-yellow-500 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-100"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-800">
            {options.map((option, index) => (
              <li key={index}>
                <Link to={option.href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-[#5d0000]">
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
