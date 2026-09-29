
import React from "react";
import {
  FiMousePointer,
  FiLayout,
  FiUserPlus,
  FiBarChart2,
  FiRefreshCw,
  FiCheck,
  FiArrowDown,
} from "react-icons/fi";

import "./MarketingConversion.css";

const optimizationItems = [
  {
    icon: FiLayout,
    title: "Landing Pages",
    text: "Clear, focused experiences built around the user's next action.",
  },
  {
    icon: FiUserPlus,
    title: "Lead Generation",
    text: "Create smoother paths for relevant business enquiries.",
  },
  {
    icon: FiRefreshCw,
    title: "Retargeting",
    text: "Reconnect with people who have already interacted with your brand.",
  },
  {
    icon: FiBarChart2,
    title: "Analytics & Tracking",
    text: "Measure important actions and understand campaign performance.",
  },
];

const journey = [
  {
    number: "01",
    title: "Ad / Search",
    text: "Capture attention",
    icon: FiMousePointer,
  },
  {
    number: "02",
    title: "Landing Page",
    text: "Build interest",
    icon: FiLayout,
  },
  {
    number: "03",
    title: "User Action",
    text: "Drive engagement",
    icon: FiUserPlus,
  },
  {
    number: "04",
    title: "Conversion",
    text: "Create business value",
    icon: FiBarChart2,
  },
];

export default function MarketingConversion() {
  return (
    <section className="marketing-conversion">
      <div className="marketing-conversion__container">

        {/* HEADER */}

        <header className="marketing-conversion__header">

          <span className="marketing-conversion__eyebrow">
            LEAD GENERATION & CONVERSION
          </span>

          <h2 className="marketing-conversion__title">
            Turn Traffic Into{" "}
            <span>Business Opportunities</span>
          </h2>

          <p className="marketing-conversion__intro">
            Getting people to your website is only part of the journey.
            We focus on creating a clearer path from the first visit
            to a meaningful enquiry, signup or purchase.
          </p>

        </header>

        {/* MAIN CONTENT */}

        <div className="marketing-conversion__layout">

          {/* LEFT JOURNEY */}

          <div className="marketing-conversion__journey">

            <div className="marketing-conversion__journey-head">

              <div>
                <span>CONVERSION JOURNEY</span>
                <strong>From Click to Action</strong>
              </div>

              <div className="marketing-conversion__journey-badge">
                <i />
                Optimized
              </div>

            </div>

            <div className="marketing-conversion__steps">

              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <React.Fragment key={step.number}>

                    <div className="marketing-conversion__step">

                      <div className="marketing-conversion__step-icon">
                        <Icon />
                      </div>

                      <div className="marketing-conversion__step-content">
                        <span>{step.number}</span>
                        <strong>{step.title}</strong>
                        <small>{step.text}</small>
                      </div>

                      <FiCheck className="marketing-conversion__step-check" />

                    </div>

                    {index < journey.length - 1 && (
                      <div className="marketing-conversion__step-arrow">
                        <FiArrowDown />
                      </div>
                    )}

                  </React.Fragment>
                );
              })}

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="marketing-conversion__content">

            <span className="marketing-conversion__content-label">
              OPTIMIZATION FOCUS
            </span>

            <h3>
              Every click should have
              <br />
              <span>a clear next step.</span>
            </h3>

            <p className="marketing-conversion__description">
              We look beyond traffic numbers and focus on the
              experience users have after they arrive. From landing
              page structure to tracking and remarketing, each part
              can be improved with the right data and strategy.
            </p>

            <div className="marketing-conversion__cards">

              {optimizationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="marketing-conversion__card"
                    key={item.title}
                  >

                    <div className="marketing-conversion__card-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>

                  </article>
                );
              })}

            </div>

          </div>

        </div>

        {/* BOTTOM STRIP */}

        <div className="marketing-conversion__strip">

          <div>
            <span>01</span>
            Better Experience
          </div>

          <div>
            <span>02</span>
            Clearer Journey
          </div>

          <div>
            <span>03</span>
            Meaningful Tracking
          </div>

          <div>
            <span>04</span>
            Continuous Improvement
          </div>

        </div>

      </div>
    </section>
  );
}
 
