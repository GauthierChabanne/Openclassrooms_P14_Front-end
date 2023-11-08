import React from "react";
import "../styles/Filter.css"

function Filter({ filter, setFilter }) {
  return (
    <div className="table-filter">
      <span className="table-filter__search"> Search : </span>

      <input
        className="table-filter__input"
        type="text"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
