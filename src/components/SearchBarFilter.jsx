import React, { useState } from "react";
import data from "./databooks.json";

function SearchBarFilter() {
  return (
    <>
      <input type="search" />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.title}, {item.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchBarFilter;
