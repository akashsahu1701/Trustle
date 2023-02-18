import React from "react";
import "./about.css";
import Header from "../header/header";

const About = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">About</div>
        <div className="para">
          Trustle is an anti-AGI (Artificial General Intelligence) FPO
          (For-Profit Organisation) that specialises in the management of
          digital trails and online data.
        </div>
        <div className="para">
          Human life is already largely ‘digital’, i.e. we work and interact
          mostly online (the average person spends 10 hours a day online, and
          this does not take into account the ‘digital spillover effect’ (where
          the surroundings (people and objects) within your proximity are also
          online)). These transactions are both monitored and stored as valuable
          data.
        </div>
        <div className="para">
          The 1s and 0s that built our amazing technology (computers, internet,
          software, ...), have also left our online presence interpretable as 1s
          and 0s. The digitisation of our existence and collective knowledge
          provides multiple possibilities. The first affects are materially
          positive, e.g. the creation of separate generative AI models for
          various fields of scientific innovation (medicine, applied physics,
          astrology, ...) and the replacement of ‘repetitive’ jobs
          (manufacturing, transportation, admin, ...).
        </div>
        <div className="para">
          But given the mass and density of our digital economy, we are already
          far beyond the requirements of allowing RL-based (self-training) AI
          models to fully steer human’s progress from here. This can cause
          unprecedented turns if not aligned correctly (read our research here).
        </div>
      </div>
    </div>
  );
};

export default About;
