
import React from "react";
import "./WebProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience and project requirements before development begins.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the structure, features, technology and overall direction needed for the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a clear, intuitive and user-focused visual experience around your requirements.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the solution using the right technology, clean implementation and practical development practices.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test functionality, responsiveness, usability and performance across different devices.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We prepare the final solution for deployment, handover and the next stage of your digital journey.",
  },
];

export default function WebProcess() {
  return (
    <section className="web-process" id="how-we-work">
      <div className="web-process__container">

        {/* Section Header */}
        <header className="web-process__header">
          <span className="web-process__eyebrow">
            OUR DEVELOPMENT PROCESS
          </span>

          <h2 className="web-process__title">
            How We <span>Work</span>
          </h2>

          <p className="web-process__intro">
            A clear and structured process keeps every project focused,
            transparent and efficient from the first conversation to launch.
          </p>
        </header>

        {/* Desktop Timeline */}
        <div className="web-process__timeline">
          <div className="web-process__line" />

          {processSteps.map((step) => (
            <article
              className="web-process-step"
              key={step.number}
            >
              <div className="web-process-step__marker">
                <span>{step.number}</span>
              </div>

              <div className="web-process-step__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Small Closing Note */}
        <div className="web-process__note">
          <span className="web-process__note-dot" />

          <p>
            Every project follows the same structured approach while
            remaining flexible enough to adapt to its specific requirements.
          </p>
        </div>

      </div>
    </section>
  );
}

