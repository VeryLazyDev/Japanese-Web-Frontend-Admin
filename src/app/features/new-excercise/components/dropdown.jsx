import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, defaultValue, style }) => {
  const defaultOption =
    options.find((option) => option.value === defaultValue) || options[0];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdwonref = useRef(null);

  useEffect(() => {
    if (defaultOption) {
      onSelect(defaultOption);
    }
  }, [defaultOption, onSelect]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex justify-center" ref={dropdwonref}>
        <button
          className={`flex justify-center items-center bg-neutral-100 ${style} h-8 text-xs font-inter text-black rounded-sm cursor-pointer hover:brightness-80 transition-all duration-100`}
          onClick={handleToggle}
        >
          {selectedOption.label}
          <ChevronDown size={18} className="text-muted-font" />
        </button>
        {isOpen && (
          <ul className="absolute bg-neutral-100 top-10 list-none rounded-sm">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`flex items-center ${style} text-xs font-inter text-black h-8 cursor-pointer hover:bg-neutral-400`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
