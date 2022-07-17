import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import {search} from '../../../features/searchSlice';



function SearchBar({ Icon }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("Spider Man");



  const queryHandler = (e) => {
    e.preventDefault();
    dispatch(search(query));
  };

  return (
    <>
      <form className="search" onSubmit={(e) => queryHandler(e)}>
        <div className="search">
          <Icon className="icon" />
          <input
            type="text"
            placeholder="Search..."
            maxLength="20"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
         
        </div>
      </form>
    </>
  );
}

export default SearchBar;
