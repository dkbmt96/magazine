import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex items-center float-right">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Keyword"
        className="border p-2 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-gray-200 text-gray-600 p-2 rounded-r-md hover:bg-gray-400"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBox;
