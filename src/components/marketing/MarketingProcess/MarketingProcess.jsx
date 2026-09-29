
import React from "react";
import {
  FiSearch,
  FiCompass,
  FiLayers,
  FiPlay,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";

import "./MarketingProcess.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Learn about your business, audience, goals and market.",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "Research",
    text: "Study competitors, keywords, audiences and opportunities.",
    icon: FiCompass,
  },
  {
    number: "03",
    title: "Strategize",
    text: "Build the right channel mix and marketing direction.",
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Launch",
    text: "Put campaigns, content, SEO and tracking into action.",
    icon: FiPlay,
  },
  {
    number: "05",
    title: "Optimize",
    text: "Review performance and improve what matters.",
    icon: FiTrendingUp,
  },
  {
    number: "06",
    title: "Report",
    text: "Turn marketing data into clear insights and next steps.",
    icon: FiBarChart2,
  },
];

export default function MarketingProcess() {
  return (
    <section className="marketing-process">
      <div className="marketing-process__container">

        {/* HEADER */}

        <header className="marketing-process__header">

          <span className="marketing-process__eyebrow">
            OUR APPROACH
          </span>

          <h2 className="marketing-process__title">
            How We Grow Your{" "}
            <span>Business</span>
          </h2>

          <p className="marketing-process__intro">
            A clear and structured process keeps every marketing
            activity focused, measurable and aligned with your goals.
          </p>

        </header>

        {/* PROCESS */}

        <div className="marketing-process__timeline">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.number}>

                <article className="marketing-process__step">

                  <div className="marketing-process__number">
                    {step.number}
                  </div>

                  <div className="marketing-process__icon">
                    <Icon />
                  </div>

                  <div className="marketing-process__step-content">

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </div>

                </article>

                {index < steps.length - 1 && (
                  <div className="marketing-process__connector" />
                )}

              </React.Fragment>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}

        <div className="marketing-process__bottom">

          <div className="marketing-process__bottom-mark">
            <span />
            <span />
            <span />
          </div>

          <p>
            Strategy, execution and measurement work together —
            so every channel has a clear purpose.
          </p>

        </div>

      </div>
    </section>
  );
}
