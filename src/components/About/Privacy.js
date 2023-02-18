import React from "react";
import Header from "../header/header";

const Privacy = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">Privacy</div>
        <div className="para">
          At Trustle we are committed to protecting the privacy of our users and
          their personal information. This Privacy Policy explains how we
          collect, use, and disclose the personal information of our users, and
          what rights and choices they have in relation to their personal
          information.
        </div>
        <div className="para">
          1. Collection of Personal Information <br /> We collect personal
          information from our users when they sign up for an account, complete
          their profile, and use our services. The personal information we
          collect may include, but is not limited to, the user's name, email
          address, social security number, and online account information.
        </div>
        <div className="para">
          2. Use of Personal Information <br /> We use the personal information
          of our users to provide and improve our services, to communicate with
          our users, and to comply with legal requirements. The personal
          information we collect will not be used for any other purpose unless
          the user gives their explicit consent.
        </div>
        <div className="para">
          3. Disclosure of Personal Information <br /> We may disclose personal
          information to third parties in the following circumstances:
          <ul>
            <li>To complywith legal requirements</li>
            <li>To enforce our terms and conditions</li>
            <li>
              {" "}
              To protect the rights, property, or safety of Trustle, our users,
              or others
            </li>
          </ul>
          We will not sell, rent, or otherwise transfer personal information to
          any third party for commercial purposes without the user's explicit
          consent.
        </div>
        <div className="para">
          4. Security of Personal Information <br /> We take appropriate
          technical and organizational measures to protect the personal
          information of our users against unauthorized access, disclosure,
          alteration, or destruction.
        </div>
        <div className="para">
          5. Data Retention <br /> We will retain the personal information of
          our users for as long as necessary to provide our services, comply
          with legal requirements, and enforce our terms and conditions.
        </div>
        <div className="para">
          6. Rights and Choices
          <br /> Our users have the right to access, correct, update, or delete
          their personal information at any time. They also have the right to
          object to the processing of their personal information and to request
          the transfer of their personal information to another organisation.
        </div>
        <div className="para">
          7. Changes to Privacy <br /> Policy We may update this Privacy Policy
          from time to time to reflect changes in our practices or to comply
          with legal requirements. If we make any material changes to this
          Privacy Policy, we will notify our users by email or by posting a
          notice on our website.
        </div>
        <div className="para">
          8. Contact Us <br /> If you have any questions or concerns about this
          Privacy Policy, please contact us through our report page here.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
