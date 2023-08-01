import React, { useEffect, useState } from "react";
import { ReactComponent as Chevrondown } from '../../assets/fi_chevron-down.svg';
import { ChevronDown, ChevronUp } from "react-feather";
import Select from "react-select";

const DropDown = ({ options, handleSelect }) => {
  const [expand, setExpand] = useState(false);
  const [SelectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    const globalClickHandler = () => {
      setExpand((value) => (value ? false : value));
    };
    document.addEventListener("click", globalClickHandler);

    return () => {
      document.removeEventListener("click", globalClickHandler);
    };
  }, []);

  return (
    <div className="dropdown flex cursor-pointer">
      <button
        className="dropdown-label dropdown-item"
        onClick={(e) => {
          e.stopPropagation();
          setExpand((value) => !value);
        }}
      >
        {SelectedProject ? SelectedProject : "Nanny's Shop"}
      </button>
      <div className={`dropdown-options ${expand ? "expand" : ""}`}>
        {expand &&
          options.map((option) => (
            <button
              className="dropdown-item"
              onClick={() => {
                setExpand(false);
                setSelectedProject(option);
                handleSelect(option);
              }}
              key={option}
            >
              {option}
            </button>
          ))}
          <ChevronDown 
          />
      </div>

      
    </div>
  );
};

export default DropDown;
