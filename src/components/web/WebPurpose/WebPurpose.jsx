
import React from "react";
import "./WebPurpose.css";

const features = [
  {
    number: "01",
    title: "Business-Focused",
    description:
      "Solutions built around actual business requirements, users and day-to-day goals.",
  },
  {
    number: "02",
    title: "Modern & Responsive",
    description:
      "Interfaces designed to work smoothly and consistently across desktop, tablet and mobile.",
  },
  {
    number: "03",
    title: "Performance-Focused",
    description:
      "Clean development practices with attention to speed, usability and efficient experiences.",
  },
  {
    number: "04",
    title: "Scalable Solutions",
    description:
      "Flexible architecture that can evolve as your business, users and requirements grow.",
  },
  {
    number: "05",
    title: "Clean Development",
    description:
      "Organized implementation focused on maintainability, clarity and practical development standards.",
  },
  {
    number: "06",
    title: "Reliable Support",
    description:
      "Clear communication and dependable support throughout the project lifecycle.",
  },
];

export default function WebPurpose() {
  return (
    <section className="web-purpose" id="built-with-purpose">
      <div className="web-purpose__container">

        {/* Section Header */}
        <header className="web-purpose__header">
          <span className="web-purpose__eyebrow">
            WHY CHOOSE OUR SERVICES
          </span>

          <h2 className="web-purpose__title">
            Built With <span>Purpose</span>
          </h2>

          <p className="web-purpose__intro">
            Every project is approached with a focus on usability,
            performance, scalability and the actual needs of the business.
          </p>
        </header>

        {/* Feature Grid */}
        <div className="web-purpose__grid">
          {features.map((feature) => (
            <article
              className="web-purpose-card"
              key={feature.number}
            >
              {/* Card Top */}
              <div className="web-purpose-card__top">
                <span className="web-purpose-card__number">
                  {feature.number}
                </span>

                <span className="web-purpose-card__line" />
              </div>

              {/* Content */}
              <div className="web-purpose-card__content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              {/* Accent */}
              <span className="web-purpose-card__accent" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
 
