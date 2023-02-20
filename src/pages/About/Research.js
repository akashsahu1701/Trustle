import React from "react";
import Header from "../../components/header/header";

const Research = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">Research</div>
        <div className="para underline">
          AGI safety from first principles - LessWrong{" "}
        </div>
        <div className="para underline">
          The Learning-Theoretic AI Alignment Research Agenda - AI Alignment
          Forum
        </div>
        <div className="para underline">
          Superintelligence: Paths, Dangers, Strategies - Nick Bostrom, Napoleon
          Ryan
        </div>
        <div className="para underline">1906.01820.pdf (arxiv.org)</div>
        <div className="para underline">
          AlignmentMachineLearning.pdf (intelligence.org)
        </div>
        <div className="para underline">
          The Artificial Intelligence Revolution: Part 1 - Wait But Why
        </div>
        <div className="para underline">
          [1602.03506] Research Priorities for Robust and Beneficial Artificial
          Intelligence (arxiv.org)
        </div>
        <div className="para underline">2204.05862.pdf (arxiv.org)</div>
        <div className="para underline">World Models</div>
        <div className="para underline">Simulators</div>
        <div className="para underline">The Network State</div>
      </div>
    </div>
  );
};

export default Research;
