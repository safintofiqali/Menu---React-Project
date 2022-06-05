import React from "react";

const Categories = ({ menuOptions, changeMenuOption }) => {
  return (
    <div className="btn-container">
      {menuOptions.map((option, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => {
              changeMenuOption(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
