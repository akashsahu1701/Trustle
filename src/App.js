import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchResult />} />
        {/* <Route path="" element={<Contact />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <div className="home__subfooter">
        <div className="subfooter_li">Trustle 2023</div>
        <div className="subfooter_li">Beta v.1</div>
      </div>
      <div className="home__footer">
        <div className="home__footerLeft">
          <div>About</div>
          <div>FAQs</div>
          <div>Research</div>
          <div>How Search works</div>
        </div>
        <div className="home__footerRight">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Settings</div>
        </div>
      </div>
      {/* <Navigate to="/" /> */}
    </BrowserRouter>
  );
}

export default App;
