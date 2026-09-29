 
import React from "react";
import {
  FiInstagram,
  FiFacebook,
  FiTarget,
  FiEdit3,
  FiMessageCircle,
  FiBarChart2,
  FiArrowUpRight,
} from "react-icons/fi";

import "./MarketingSocial.css";

const services = [
  {
    icon: FiTarget,
    title: "Audience Strategy",
    text: "Reach relevant people with focused audience and campaign planning.",
  },
  {
    icon: FiEdit3,
    title: "Content Planning",
    text: "Plan useful, consistent content around your brand and audience.",
  },
  {
    icon: FiMessageCircle,
    title: "Engagement",
    text: "Build a stronger presence through meaningful audience interaction.",
  },
  {
    icon: FiBarChart2,
    title: "Social Advertising",
    text: "Use paid campaigns to support awareness, leads or sales.",
  },
];

const platforms = [
  "Facebook",
  "Instagram",
  "Meta Ads",
];

export default function MarketingSocial() {
  return (
    <section className="marketing-social">

      <div className="marketing-social__container">

        {/* HEADER */}

        <header className="marketing-social__header">

          <span className="marketing-social__eyebrow">
            SOCIAL & CREATIVE
          </span>

          <h2 className="marketing-social__title">
            Build a Social Presence{" "}
            <span>People Remember</span>
          </h2>

          <p className="marketing-social__intro">
            From content planning to paid social campaigns, we
            create a consistent digital presence designed around
            your audience, brand and business goals.
          </p>

        </header>

        {/* MAIN CONTENT */}

        <div className="marketing-social__layout">

          {/* LEFT VISUAL */}

          <div className="marketing-social__visual">

            <div className="marketing-social__visual-header">

              <div className="marketing-social__brand-mark">
                <FiInstagram />
              </div>

              <div>
                <span>SOCIAL CAMPAIGN</span>
                <strong>Content & Advertising</strong>
              </div>

              <div className="marketing-social__status">
                <i />
                Active
              </div>

            </div>

            {/* SOCIAL POSTS */}

            <div className="marketing-social__posts">

              <div className="marketing-social__post marketing-social__post--large">

                <div className="marketing-social__post-gradient">
                  <span>YOUR BRAND</span>
                  <strong>
                    Content that
                    <br />
                    connects.
                  </strong>
                  <small>Creative • Strategy • Growth</small>
                </div>

                <div className="marketing-social__post-footer">
                  <span>Sponsored</span>
                  <FiArrowUpRight />
                </div>

              </div>

              <div className="marketing-social__post marketing-social__post--small">

                <div className="marketing-social__mini-content">
                  <FiFacebook />
                  <span>Social Content</span>
                  <strong>Plan. Publish. Engage.</strong>
                </div>

              </div>

              <div className="marketing-social__post marketing-social__post--small marketing-social__post--light">

                <div className="marketing-social__mini-content">
                  <span>REACH</span>
                  <strong>Right audience.</strong>
                  <small>Relevant messaging</small>
                </div>

              </div>

            </div>

            {/* PLATFORM STRIP */}

            <div className="marketing-social__platforms">

              {platforms.map((platform, index) => (
                <div key={platform}>

                  {index === 0 && <FiFacebook />}
                  {index === 1 && <FiInstagram />}
                  {index === 2 && <FiTarget />}

                  <span>{platform}</span>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="marketing-social__content">

            <span className="marketing-social__content-label">
              COMPLETE SOCIAL MARKETING
            </span>

            <h3>
              Strategy first.
              <br />
              <span>Content with purpose.</span>
            </h3>

            <p className="marketing-social__description">
              A strong social presence needs more than frequent
              posting. We connect strategy, creative direction,
              audience engagement and advertising into one
              consistent approach.
            </p>

            <div className="marketing-social__services">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    className="marketing-social__service"
                    key={service.title}
                  >

                    <div className="marketing-social__service-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>{service.title}</h4>
                      <p>{service.text}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* WORKFLOW */}

        <div className="marketing-social__workflow">

          <div className="marketing-social__workflow-item">
            <span>01</span>
            <strong>Strategy</strong>
          </div>

          <div className="marketing-social__workflow-line" />

          <div className="marketing-social__workflow-item">
            <span>02</span>
            <strong>Content</strong>
          </div>

          <div className="marketing-social__workflow-line" />

          <div className="marketing-social__workflow-item">
            <span>03</span>
            <strong>Publishing</strong>
          </div>

          <div className="marketing-social__workflow-line" />

          <div className="marketing-social__workflow-item">
            <span>04</span>
            <strong>Engagement</strong>
          </div>

          <div className="marketing-social__workflow-line" />

          <div className="marketing-social__workflow-item">
            <span>05</span>
            <strong>Analytics</strong>
          </div>

        </div>

      </div>

    </section>
  );
}