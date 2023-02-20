import React from "react";
import Header from "../../components/header/header";

const Faqs = () => {
  return (
    <div>
      <Header logo={true} />
      <div className="container">
        <div className="title">FAQs</div>
        <div className="para">
          Q: What is Trustle? <br />
          A: Trustle is an anti-AGI (Artificial General Intelligence) FPO
          (For-Profit Organisation) that focuses on managing digital trails and
          online data.
        </div>
        <div className="para">
          Q: What services does Trustle provide?
          <br />
          A: Trustle provides services to manage digital trails and online data
          to prevent the development and impact of Artificial General
          Intelligence (AGI), including locating all your online accounts and
          removing them according to your will.
        </div>
        <div className="para">
          Q: What does the future behold? <br />
          A: It is uncertain what the terminal state of humans will be in the
          future, e.g. 1,000,000 years from now. It is clear that there is not
          only a finite amount of recourses on earth - but also the universe.
          The consensus outlook is that globalisation will continue in the
          decades to come, causing convergence and sameness - but on scale (one
          big global market / ”the world is flat”) (A).{" "}
        </div>
        <div className="para">
          The global plateu outlook of human progress is an inevitable road to
          extinction without technological advancements to relieve competitive
          pressures (expansion of linear competition at global scale {">"}
          conflict/end of resources {">"} extinction). From this standpoint, the
          coin-flip risk (“nothing or something” / “immortality or extinction”)
          associated with developing robots transcending human intelligence is
          1. inevitable (it must happen) as robots do not have ‘needs’ as humans
          do (they have no demands i.e. all added value resides with humans),
          and 2. it will prevent the current ‘platue’ outlook but in return
          provide us the coin-flip risk that is associated (take-off? or
          bye-bye?) (B).
        </div>
        <div className="para">
          Q: Why doesn’t Trustle participate in AI?
          <br />
          A: Most AI models are built using similar architectural structures as
          living organisms brains e.g. neural networks. These models use
          reinforcement learning to automate the alignment and efficiency of the
          models output i.e. they are self-learning and the true mechanisms
          underneath are unknown which is why these models are referred to as
          ‘black-boxes’ (1, 2, 3).{" "}
        </div>
        <div className="para">
          Multiple studies have shown how models built with one purpose e.g.
          generating images, have learnt other unintentional skills such as
          counting, text generating, and more. Max Tegmark explains conciseness
          as the act of processing information (and nothing else) which implies
          that today’s models are already ‘conscious’ to a certain degree (4, 5,
          6).
        </div>
        <div className="para">
          AGI, ANI, AI, ..., are and will improve our daily lives for the
          better, but for this to be accurately implemented it will require
          fully functional alignment technology to work - not any laws or
          regulations. The proposed technology solution is ‘RLHF’ (Reinforcement
          Learning from Human Feedback) which is a high-level concept that
          explores the possibility of adjusting the reinforcement learning
          according to our (human) feedback which will positively incentivise
          human-beneficial actions, i.e. aligning the technology to our needs
          (6, 7).
        </div>
        <div className="para">
          {" "}
          Trustle is currently exploring the ground-breaking possibilities of AI
          but prioritising a caution over speed approach in our R&D. An approach
          that we highly endorse to our competitors as-well.{" "}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
