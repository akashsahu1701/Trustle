import React from "react";
import Header from "../header/header";
import "./issue.css";
import mail from "../../assets/svg/mail.svg";

const RaiseIssue = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="issue__title">Report an issue</div>
        <div className="issue__text">
          If you have identified an issue, e.g. a profile displaying inaccurate
          information. Please submit a message describing the issue and Trustle
          will do it's best aligning our technology to your needs.
        </div>
        <div className="issue__input">
          <textarea />
          <div className="sendmail__bx">
            <div>send message</div>{" "}
            <div>
              <img src={mail} alt="mail" />{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseIssue;
