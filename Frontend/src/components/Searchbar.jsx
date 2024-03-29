import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
