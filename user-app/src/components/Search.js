import React from "react";
const Search = ({ searchQuery, onSearchChange }) => {
  
  return (
    <div className="mb-6">
      <label htmlFor="search" className="block text-lg font-semibold mb-2">
        Search by Name or Email
      </label>
      <input
        type="text"
        className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="search"
        placeholder="Search here..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      ></input>
    </div>
  );
};
export default Search;
