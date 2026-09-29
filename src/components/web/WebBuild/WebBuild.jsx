 
import React from "react";
import "./WebBuild.css";

const buildCategories = [
  {
    number: "01",
    category: "WordPress",
    title: "Business & Corporate Websites",
    description:
      "Professional WordPress websites for businesses that need a clear digital presence, easy content management and a polished user experience.",

    capabilities: [
      "Corporate Websites",
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "Content-Driven Websites",
    ],

    images: [
      "/assets/web-build/wordpress/wordpress-01.jpg",
      "/assets/web-build/wordpress/wordpress-02.jpg",
      "/assets/web-build/wordpress/wordpress-03.jpg",
      "/assets/web-build/wordpress/wordpress-04.jpg",
    ],
  },

  {
    number: "02",
    category: "Shopify",
    title: "eCommerce Stores",
    description:
      "Modern Shopify stores designed around products, customer journeys and smooth shopping experiences across desktop and mobile.",

    capabilities: [
      "Online Stores",
      "Custom Storefronts",
      "Product Catalogs",
      "Custom Sections",
      "Store Optimization",
    ],

    images: [
      "/assets/web-build/shopify/shopify-01.jpg",
      "/assets/web-build/shopify/shopify-02.jpg",
      "/assets/web-build/shopify/shopify-03.jpg",
      "/assets/web-build/shopify/shopify-04.jpg",
    ],
  },

  {
    number: "03",
    category: "Custom Software",
    title: "Business Management Systems",
    description:
      "Purpose-built web software for managing business operations, internal workflows, data and everyday processes from one place.",

    capabilities: [
      "Business Management Systems",
      "Admin Panels",
      "Internal Tools",
      "Workflow Automation",
      "API Integrations",
    ],

    images: [
      "/assets/web-build/software/software-01.jpg",
      "/assets/web-build/software/software-02.jpg",
      "/assets/web-build/software/software-03.jpg",
      "/assets/web-build/software/software-04.jpg",
    ],
  },

  {
    number: "04",
    category: "React",
    title: "Modern Web Applications",
    description:
      "Interactive React applications with responsive interfaces, reusable components and scalable frontend architecture.",

    capabilities: [
      "Web Applications",
      "Interactive Dashboards",
      "Customer Portals",
      "Custom UI",
      "Responsive Interfaces",
    ],

    images: [
      "/assets/web-build/react/react-01.jpg",
      "/assets/web-build/react/react-02.jpg",
      "/assets/web-build/react/react-03.jpg",
      "/assets/web-build/react/react-04.jpg",
    ],
  },
];

export default function WebBuild() {
  return (
    <section className="web-build" id="what-we-build">
      <div className="web-build__container">

        {/* Section Header */}
        <div className="web-build__header">
          <span className="web-build__eyebrow">
            WHAT WE CAN BUILD
          </span>

          <h2 className="web-build__title">
            What We Can <span>Build</span>
          </h2>

          <p className="web-build__intro">
            From professional business websites and eCommerce stores to
            custom software and modern web applications, we build digital
            experiences around real business requirements.
          </p>
        </div>

        {/* Service Cards */}
        <div className="web-build__grid">
          {buildCategories.map((service) => (
            <article
              className="web-build-card"
              key={service.number}
            >
              {/* Project Image Slider */}
              <div className="web-build-card__visual">

                <div className="web-build-card__images">
                  {service.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${service.category} project ${index + 1}`}
                      className="web-build-card__image"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className="web-build-card__overlay" />

                <span className="web-build-card__badge">
                  {service.category}
                </span>

                <span className="web-build-card__view">
                  View Projects ↗
                </span>
              </div>

              {/* Card Content */}
              <div className="web-build-card__content">

                <div className="web-build-card__top">
                  <span className="web-build-card__number">
                    {service.number}
                  </span>

                  <span className="web-build-card__technology">
                    {service.category}
                  </span>
                </div>

                <h3 className="web-build-card__title">
                  {service.title}
                </h3>

                <p className="web-build-card__description">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="web-build-card__capabilities">
                  {service.capabilities.map((item) => (
                    <span
                      className="web-build-card__capability"
                      key={item}
                    >
                      <span className="web-build-card__dot" />
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
 
