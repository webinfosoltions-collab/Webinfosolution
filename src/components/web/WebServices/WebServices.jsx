
import React from "react";
import "./WebServices.css";

const services = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Professional, flexible and easy-to-manage WordPress websites built around your brand and business needs.",
    capabilities: [
      "Business Websites",
      "Custom WordPress Development",
      "Theme Customization",
      "Landing Pages",
      "CMS Solutions",
      "Performance Optimization",
    ],
  },
  {
    number: "02",
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify stores designed for better shopping experiences, performance and scalability.",
    capabilities: [
      "Custom Shopify Stores",
      "Theme Customization",
      "Custom Sections",
      "App Integration",
      "Product & Collection Setup",
      "Store Optimization",
    ],
  },
  {
    number: "03",
    title: "Custom Software Development",
    description:
      "Purpose-built software solutions that simplify business processes, improve efficiency and support long-term growth.",
    capabilities: [
      "Business Management Systems",
      "Admin Dashboards",
      "Custom Web Applications",
      "Workflow Automation",
      "API Integrations",
      "Database-Driven Applications",
    ],
  },
  {
    number: "04",
    title: "React Development",
    description:
      "Fast, scalable and interactive web applications built with modern React development practices.",
    capabilities: [
      "React Web Applications",
      "Interactive Dashboards",
      "Custom UI Development",
      "API Integration",
      "Responsive Interfaces",
      "Scalable Frontend Architecture",
    ],
  },
];

export default function WebServices() {
  return (
    <section className="web-services" id="web-services">
      <div className="web-services__container">

        {/* Section Header */}
        <header className="web-services__header">
          <span className="web-services__eyebrow">
            OUR SERVICES
          </span>

          <h2 className="web-services__title">
            Solutions We <span>Build</span>
          </h2>

          <p className="web-services__intro">
            Choose the technology that fits your business, project
            requirements and growth goals.
          </p>
        </header>

        {/* Services Grid */}
        <div className="web-services__grid">
          {services.map((service) => (
            <article
              className="web-service-card"
              key={service.number}
            >
              {/* Card Top */}
              <div className="web-service-card__top">
                <span className="web-service-card__number">
                  {service.number}
                </span>

                <span className="web-service-card__arrow">
                  ↗
                </span>
              </div>

              {/* Card Content */}
              <div className="web-service-card__content">
                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>
              </div>

              {/* Divider */}
              <div className="web-service-card__divider" />

              {/* Capabilities */}
              <div className="web-service-card__capabilities">
                <span className="web-service-card__capabilities-label">
                  CAPABILITIES
                </span>

                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>
                      <span className="web-service-card__check">
                        ✓
                      </span>

                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent */}
              <div className="web-service-card__bottom">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

