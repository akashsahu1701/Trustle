import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateContext";
import { actionTypes } from "../../reducer";

import searchIcon from "../../assets/svg/search.svg";
import pledge from "../../assets/svg/pledge.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";

import "./Search.css";

function Search() {
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
    <form className="search" onSubmit={search}>
      <div className="search__input">
        <input
          value={input}
          placeholder="Search name or username"
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <SearchIcon className="search__inputIcon" /> */}
        <div
          onClick={() => navigate("/issue")}
          className="report__issue cursor"
        >
          Report an issue
        </div>
        <div className="search__inputIcon cursor">
          <img src={searchIcon} alt="seach icon" />
        </div>
      </div>
      <div className="search__buttons">
        <Button
          className="btn btn_dark"
          onClick={() => navigate("/signup")}
          variant="outlined"
        >
          Sign up
        </Button>
        <Button
          className="btn btn_primary"
          onClick={() => navigate("/pledge")}
          variant="outlined"
        >
          Pledge{" "}
          <span style={{ marginLeft: "10px" }}>
            <img src={pledge} alt="" />
          </span>
        </Button>
      </div>
    </form>
  );
}

export default Search;
