import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

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
    <div className="flex cursor-pointer ">
      <button
        className=""
        onClick={(e) => {
          e.stopPropagation();
          setExpand((value) => !value);
        }}
      >
        {SelectedProject ? SelectedProject : "Nanny's Shop"}
      </button>
      <button className="ml-3">
        {expand ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </button>
      <div className={`gap-4 ${expand ? "expand" : ""}`}>
        {expand &&
          options.map((option) => (
            <button
              className=""
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
      </div>

      
    </div>
  );
};

export default DropDown;
