import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material//Search";
import DescriptionIcon from "@mui/icons-material//Description";
import ImageIcon from "@mui/icons-material//Image";
import LocalOfferIcon from "@mui/icons-material//LocalOffer";
import RoomIcon from "@mui/icons-material//Room";
import MoreVertIcon from "@mui/icons-material//MoreVert";
import ArrowDropDownIcon from "@mui/icons-material//ArrowDropDown";

import logo from "../../assets/svg/logo.svg";

import useGoogleSearch from "../../hooks/useGoogleSearch/useGoogleSearch";
import { useStateValue } from "../../StateContext";

import Search from "../../components/Search/Search";
import SearchOption from "../../components/SearchOption/SearchOption";

import "./SearchResult.css";
import Header from "../../components/header/header";

function SearchResult() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); // LIVE API Call

  return (
    <div className="searchResult">
      <Header logo={true} search={true} />
      {/* <div className="searchResult__header">

        <div className="searchResult__headerBody">
          <Search hideButtons />

          <div className="searchResult__options">
            <div className="searchResult__optionsLeft">
              <SearchOption title="All" icon={<SearchIcon />} />
              <SearchOption title="News" icon={<DescriptionIcon />} />
              <SearchOption title="Images" icon={<ImageIcon />} />
              <SearchOption title="Shopping" icon={<LocalOfferIcon />} />
              <SearchOption title="Maps" icon={<RoomIcon />} />
              <SearchOption title="More" icon={<MoreVertIcon />} />
            </div>
            <div className="searchResult__optionsRight">
              <SearchOption title="Settings" />
              <SearchOption title="Tools" />
            </div>
          </div>
        </div>
      </div> */}

      {term && (
        <div className="searchResult__items">
          <p className="searchResult__itemsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchResult__item" key={item.formattedUrl}>
              <a href={item.link} className="searchResult__itemLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchResult__itemImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt="Featured Visual"
                    />
                  )}
                {item.displayLink}
                <ArrowDropDownIcon />
              </a>

              <a href={item.link} className="searchResult__itemTitle">
                <h2>{item.title}</h2>
              </a>

              <p className="searchResult__itemSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
