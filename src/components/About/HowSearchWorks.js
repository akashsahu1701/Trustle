import React from "react";
import Header from "../header/header";

const HowSearchWorks = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">How Search works</div>
        <div className="para">
          Trustle’s search engine is built with the purpose of identifying all
          online accounts connected to the person you want to search.
        </div>
        <div className="para">
          For instance, if person A wants to find all online accounts of person
          B, - person A will enter the username of person B (or any knowledgable
          information e.g. their full name), and Trustle will i. generate
          plausible username combinations that could belong to person B (through
          statistical evidence), and ii. check the authenticity of all accounts
          across all platforms (through crossmatching up-to-date datasbases
          and/or URL-validating).
        </div>
        <div className="para">
          After a well-assessed search, Trustle will display the profiles with
          the highest statistical correlation to person B. Now feel free to
          discover their socials.
        </div>
        <div className="para">
          About Trustle: Trustle was originally designed to help individuals
          view and mange their personal ‘digital trails’. To access these tools
          create your account here.
        </div>
      </div>
    </div>
  );
};

export default HowSearchWorks;
