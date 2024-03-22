import { useState } from "react";
import style from "../components/SearchBar.module.css";

const SearchBar = ({ method }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    method(searchValue.trim());
  };

  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
        <input
          className={`${style.Bar} form-control me-2`}
          type="search"
          placeholder="Search Videos"
          aria-label="Search"
          // onKeyDown={(event) => {
          //   method(event);
          // }}
          onChange={handleInputChange}
        />
        <button
          className={`${style.Bar} btn btn-outline-success`}
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
