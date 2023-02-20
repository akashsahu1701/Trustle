import React from "react";

import useGoogleSearch from "../../hooks/useGoogleSearch/useGoogleSearch";
import { useStateValue } from "../../StateContext";

import "./SearchResult.css";
import Header from "../../components/header/header";

function SearchResult() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term); // LIVE API Call

  return (
    <div className="searchResult">
      <Header logo={true} search={true} />
      <div className="searchresult__container">
        <div className="searchresult__tabpanel">
          <div className="searchresult__tabs active">Profiles</div>
          <div className="searchresult__tabs">Accounts</div>
        </div>
        <div className="searchresults_timings">
          Approximately 105 000 000 profiles (0,43 seconds)
        </div>
        <div className="results_container">
          <div className="search__data">
            <div className="searchresults__maindata">
              <div className="searchresults__title">
                Michael Båge - 21 years old, London, UK
              </div>
              <div className="searchresults__subtitle">
                +1,000 connected accounts
              </div>
            </div>
            <div className="searchresults__accounts">
              <div className="searchresults__maindata">
                <div className="searchresults__title">Snapchat</div>
                <div className="searchresults__subtitle">3 accounts</div>
              </div>
              <div className="searchresults__maindata">
                <div className="searchresults__title">Linkedin</div>
                <div className="searchresults__subtitle">
                  2 accounts, 2 business accounts,and 3 pages
                </div>
              </div>{" "}
              <div className="searchresults__maindata">
                <div className="searchresults__title">Instagram</div>
                <div className="searchresults__subtitle">
                  1public and 2 private accounts
                </div>
              </div>{" "}
              <div className="searchresults__maindata">
                <div className="searchresults__title">Linkedin</div>
                <div className="searchresults__subtitle">2 accounts</div>
              </div>
            </div>
            <div className="searchresults__data">
              <div className="searchresults__title">
                Michael Båge - 33 years old, marrakesh, Morocco
              </div>
              <div className="searchresults__subtitle">
                +100 connected accounts
              </div>
            </div>
            <div className="searchresults__data">
              <div className="searchresults__title">
                Michael Båge - 19 years old
              </div>
              <div className="searchresults__subtitle">
                +10 connected accounts
              </div>
            </div>
            <div className="searchresults__data">
              <div className="searchresults__title">
                Michael Båge - 25 years old, New Delhi , India
              </div>
              <div className="searchresults__subtitle">
                +1,000 connected accounts
              </div>
            </div>
            <div className="searchresults__data">
              <div className="searchresults__title">
                Michael Båge - 10 years old
              </div>
              <div className="searchresults__subtitle">
                +1,000 connected accounts
              </div>
            </div>
          </div>
          <div className="searchdata_bx"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
