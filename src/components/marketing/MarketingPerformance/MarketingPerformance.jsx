
import React from "react";
import {
  FiTarget,
  FiSearch,
  FiEdit3,
  FiBarChart2,
  FiRefreshCw,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";

import "./MarketingPerformance.css";

const capabilities = [
  {
    icon: FiSearch,
    title: "Audience Research",
    text: "Understand who to reach and why.",
  },
  {
    icon: FiTarget,
    title: "Campaign Strategy",
    text: "Build campaigns around clear goals.",
  },
  {
    icon: FiEdit3,
    title: "Creative Strategy",
    text: "Create messaging that supports action.",
  },
  {
    icon: FiBarChart2,
    title: "Conversion Tracking",
    text: "Measure meaningful user actions.",
  },
];

const funnelSteps = [
  {
    number: "01",
    title: "Audience",
    text: "Right people",
  },
  {
    number: "02",
    title: "Campaign",
    text: "Right message",
  },
  {
    number: "03",
    title: "Landing Page",
    text: "Clear action",
  },
  {
    number: "04",
    title: "Conversion",
    text: "Business action",
  },
];

export default function MarketingPerformance() {
  return (
    <section className="marketing-performance">

      <div className="marketing-performance__container">

        {/* HEADER */}

        <header className="marketing-performance__header">

          <span className="marketing-performance__eyebrow">
            PERFORMANCE MARKETING
          </span>

          <h2 className="marketing-performance__title">
            Turn Attention Into{" "}
            <span>Meaningful Action</span>
          </h2>

          <p className="marketing-performance__intro">
            We connect targeting, creative, landing pages and
            measurement to build a clearer path from audience
            attention to business action.
          </p>

        </header>

        {/* MAIN PANEL */}

        <div className="marketing-performance__panel">

          {/* LEFT */}

          <div className="marketing-performance__left">

            <div className="marketing-performance__label">
              <span />
              OUR APPROACH
            </div>

            <h3>
              Structured marketing.
              <br />
              <span>Smarter optimization.</span>
            </h3>

            <p className="marketing-performance__description">
              Performance marketing works best when every part of
              the journey is connected. We focus on the audience,
              campaign, experience and data together rather than
              treating them as separate pieces.
            </p>

            <div className="marketing-performance__capabilities">

              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="marketing-performance__capability"
                    key={item.title}
                  >

                    <div className="marketing-performance__capability-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT */}

          <div className="marketing-performance__right">

            <div className="marketing-performance__dashboard">

              {/* DASHBOARD HEADER */}

              <div className="marketing-performance__dashboard-header">

                <div>
                  <span>CAMPAIGN JOURNEY</span>
                  <strong>From Reach to Conversion</strong>
                </div>

                <div className="marketing-performance__live">
                  <i />
                  Strategy
                </div>

              </div>

              {/* FUNNEL */}

              <div className="marketing-performance__funnel">

                <div className="marketing-performance__funnel-line" />

                {funnelSteps.map((step, index) => (
                  <React.Fragment key={step.number}>

                    <div className="marketing-performance__funnel-step">

                      <div className="marketing-performance__funnel-number">
                        {step.number}
                      </div>

                      <div className="marketing-performance__funnel-content">
                        <strong>{step.title}</strong>
                        <span>{step.text}</span>
                      </div>

                      <div className="marketing-performance__funnel-check">
                        <FiCheck />
                      </div>

                    </div>

                    {index < funnelSteps.length - 1 && (
                      <div className="marketing-performance__funnel-arrow">
                        ↓
                      </div>
                    )}

                  </React.Fragment>
                ))}

              </div>

              {/* DASHBOARD FOOTER */}

              <div className="marketing-performance__dashboard-footer">

                <div>
                  <FiRefreshCw />
                  <span>Continuous Optimization</span>
                </div>

                <FiArrowUpRight />

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CHANNELS */}

        <div className="marketing-performance__channels">

          <div>
            <span>01</span>
            Google Ads
          </div>

          <div>
            <span>02</span>
            Meta Ads
          </div>

          <div>
            <span>03</span>
            Retargeting
          </div>

          <div>
            <span>04</span>
            Conversion Tracking
          </div>

          <div>
            <span>05</span>
            Performance Reporting
          </div>

        </div>

      </div>

    </section>
  );
}

