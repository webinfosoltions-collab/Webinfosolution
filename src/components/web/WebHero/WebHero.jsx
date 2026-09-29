 
import React from "react";
import "./WebHero.css";

const services = [
  {
    number: "01",
    title: "WordPress",
    text: "Flexible websites",
  },
  {
    number: "02",
    title: "Shopify",
    text: "Scalable eCommerce",
  },
  {
    number: "03",
    title: "Custom Software",
    text: "Business-focused systems",
  },
  {
    number: "04",
    title: "React",
    text: "Modern web applications",
  },
];

export default function WebHero() {
  return (
    <section className="web-hero">
      {/* Background elements */}
      <div className="web-hero__grid" />
      <div className="web-hero__orb web-hero__orb--left" />
      <div className="web-hero__orb web-hero__orb--right" />

      <div className="web-hero__container">

        {/* Eyebrow */}
        <div className="web-hero__eyebrow">
          <span className="web-hero__eyebrow-line" />
          <span>WEB DEVELOPMENT SERVICES</span>
          <span className="web-hero__eyebrow-line" />
        </div>

        {/* Main heading */}
        <h1 className="web-hero__title">
          Digital Solutions Built
          <br />
          Around <span>Your Business</span>
        </h1>

        {/* Description */}
        <p className="web-hero__description">
          From powerful websites and eCommerce stores to custom software
          and modern web applications, we build digital solutions designed
          around your goals.
        </p>

        {/* Services */}
        <div className="web-hero__services">
          {services.map((service, index) => (
            <React.Fragment key={service.number}>
              <div
                className="web-hero__service"
                style={{
                  "--service-delay": `${0.35 + index * 0.1}s`,
                }}
              >
                <span className="web-hero__service-number">
                  {service.number}
                </span>

                <div className="web-hero__service-info">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <span className="web-hero__service-arrow">
                  ↗
                </span>
              </div>

              {index < services.length - 1 && (
                <span className="web-hero__connector" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom positioning statement */}
        <div className="web-hero__bottom">
          <span className="web-hero__bottom-line" />

          <p>
            Strategy
            <span>•</span>
            Design
            <span>•</span>
            Development
          </p>

          <span className="web-hero__bottom-line" />
        </div>
      </div>
    </section>
  );
}

