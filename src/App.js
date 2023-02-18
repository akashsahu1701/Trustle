import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";
import "./App.css";
import Signup from "./components/auth/signup";
import RaiseIssue from "./components/issue/raiseIssue";
import Pledge from "./components/pledge/pledge";
import Login from "./components/auth/login";
import About from "./components/About/about";
import Faqs from "./components/About/Faqs";
import Research from "./components/About/Research";
import HowSearchWorks from "./components/About/HowSearchWorks";
import Privacy from "./components/About/Privacy";
import Terms from "./components/About/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="research" element={<Research />} />
        <Route path="/howsearchwork" element={<HowSearchWorks />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="issue" element={<RaiseIssue />} />
        <Route path="pledge" element={<Pledge />} />
        {/* <Route path="" element={<Contact />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <div className="home__subfooter">
        <div className="subfooter_li">Trustle 2023</div>
        <div className="subfooter_li">Beta v.1</div>
      </div>
      <div className="home__footer">
        <div className="home__footerLeft">
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/faqs">
            <div>FAQs</div>
          </Link>
          <Link to="/research">
            <div>Research</div>
          </Link>
          <Link to="/howsearchwork">
            <div>How Search works</div>
          </Link>
        </div>
        <div className="home__footerRight">
          <Link to="/privacy">
            <div>Privacy</div>
          </Link>
          <Link to="/terms">
            <div>Terms</div>
          </Link>
          <Link to="/setting">
            <div>Settings</div>
          </Link>
        </div>
      </div>
      {/* <Navigate to="/" /> */}
    </BrowserRouter>
  );
}

export default App;
