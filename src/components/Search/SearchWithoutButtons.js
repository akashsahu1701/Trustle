import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateContext";
import searchIcon from "../../assets/svg/search.svg";

const SearchWithoutButtons = () => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("You hit the search button >>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <form onSubmit={search}>
      <div className="header__searchInput">
        <input
          value={input}
          placeholder="Search name or username"
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <SearchIcon className="search__inputIcon" /> */}
        <div className="header__searchInputIcon">
          <img onClick={search} src={searchIcon} alt="seach icon" />
        </div>
      </div>
    </form>
  );
};

export default SearchWithoutButtons;
