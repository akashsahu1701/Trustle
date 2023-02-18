import React from "react";
import Header from "../header/header";

const Terms = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">Terms</div>
        <div className="subtitle">Terms and Conditions</div>
        <ol>
          <li className="para2">
            Introduction. Trustle (hereinafter "Trustle" or "Company") provides
            its online account removal service subject to the following terms
            and conditions. By using Trustle's services, you agree to be bound
            by these terms and conditions, as well as the Company's Privacy
            Policy and any other guidelines or rules that may be published by
            Trustle from time to time.
          </li>
          <li className="para2">
            Service Description. Trustle provides a service for individuals to
            manage and remove their online accounts upon death or permanent
            incapacity. Trustle will access the online accounts of the user and
            delete or remove them as instructed.
          </li>
          <li className="para2">
            Account Ownership. The user must be the rightful owner of all online
            accounts submitted to Trustle for removal. Trustle assumes no
            responsibility for any disputes arising from account ownership.
          </li>
          <li className="para2">
            Evidence of Ownership. The user must provide adequate proof of
            ownership of their online accounts. This may include, but is not
            limited to, usernames, passwords, security questions, and answers,
            as well as any other relevant information requested by Trustle.
          </li>
          <li className="para2">
            Account Access. The user agrees to provide Trustle with full access
            to their online accounts created through Trustle. Trustle will not
            be held responsible for any unauthorized use of the user's accounts.
          </li>
          <li className="para2">
            Confidentiality. Trustle agrees to maintain the confidentiality of
            the user's account information and to use it solely for the purpose
            of removing the user's online accounts.
          </li>
          <li className="para2">
            User Responsibility. The user is responsible for ensuring that the
            information provided to Trustle is accurate and up-to-date. The user
            must also notify Trustle of any changes to their online accounts.
          </li>
          <li className="para2">
            Fees. The user may be required to pay fees for Trustle's services.
            Fees will be clearly stated on the Company's website and are subject
            to change without notice.
          </li>
          <li className="para2">
            Termination. The user may terminate their agreement with Trustle at
            any time. Trustle may also terminate the agreement if the user
            breaches any of these terms and conditions.
          </li>
          <li className="para2">
            Disclaimer of Warranties. Trustle provides its services "as is" and
            makes no representations or warranties of any kind, express or
            implied, as to the operation of its services or the information,
            content, materials, or products included on its website.
          </li>
          <li className="para2">
            Limitation of Liability. Trustle shall not be liable for any damages
            of any kind arising from the use of its services, including but not
            limited to direct, indirect, incidental, punitive, and consequential
            damages.
          </li>
          <li className="para2">
            Governing Law. These terms and conditions shall be governed and
            construed in accordance with the laws of the jurisdiction in which
            Trustle operates.
          </li>
          <li className="para2">
            Changes to Terms. Trustle reserves the right to change these terms
            and conditions at any time, effective upon posting the changes on
            its website. The user's continued use of Trustle's services
            constitutes their agreement to be bound by the then-current terms
            and conditions.
          </li>
          <li className="para2">
            Contact Information. If you have any questions or comments about
            these terms and conditions, please contact Trustle at our report
            page.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Terms;
