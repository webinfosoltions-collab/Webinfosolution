 
import React from "react";
import {
  FiSearch,
  FiTarget,
  FiMapPin,
  FiBarChart2,
  FiInstagram,
  FiUsers,
  FiFileText,
  FiUserPlus,
  FiTrendingUp,
  FiRefreshCw,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";

import "./MarketingServices.css";

const services = [
  {
    number: "01",
    title: "Google Ads",
    description:
      "Search, display and shopping campaigns built around relevant audiences and business goals.",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "Meta Ads",
    description:
      "Facebook and Instagram campaigns designed for awareness, leads, engagement or sales.",
    icon: FiTarget,
  },
  {
    number: "03",
    title: "Google Business Profile",
    description:
      "Optimize your business profile to improve local discovery, visibility and customer engagement.",
    icon: FiMapPin,
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Improve organic visibility through practical technical, on-page and content-focused SEO.",
    icon: FiTrendingUp,
  },
  {
    number: "05",
    title: "Local SEO",
    description:
      "Strengthen local search presence with location signals, local pages and profile optimization.",
    icon: FiMapPin,
  },
  {
    number: "06",
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence through strategy, content, engagement and advertising.",
    icon: FiInstagram,
  },
  {
    number: "07",
    title: "Social Media Management",
    description:
      "Keep your profiles active with planned content, publishing, optimization and community engagement.",
    icon: FiUsers,
  },
  {
    number: "08",
    title: "Content Marketing",
    description:
      "Create useful, search-friendly content that informs audiences and supports your marketing goals.",
    icon: FiFileText,
  },
  {
    number: "09",
    title: "Lead Generation",
    description:
      "Build campaigns and landing-page journeys focused on generating relevant business enquiries.",
    icon: FiUserPlus,
  },
  {
    number: "10",
    title: "Conversion Optimization",
    description:
      "Improve landing pages, user journeys and conversion points to get more value from existing traffic.",
    icon: FiActivity,
  },
  {
    number: "11",
    title: "Remarketing",
    description:
      "Reconnect with people who have already interacted with your website, products or campaigns.",
    icon: FiRefreshCw,
  },
  {
    number: "12",
    title: "Analytics & Tracking",
    description:
      "Track meaningful actions and marketing data to understand performance and guide decisions.",
    icon: FiBarChart2,
  },
];

export default function MarketingServices() {
  return (
    <section
      className="marketing-services"
      id="marketing-services"
    >
      <div className="marketing-services__container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <header className="marketing-services__header">

          <span className="marketing-services__eyebrow">
            OUR SERVICES
          </span>

          <h2 className="marketing-services__title">
            Everything You Need to{" "}
            <span>Grow Online</span>
          </h2>

          <p className="marketing-services__intro">
            From attracting new customers to measuring campaign
            performance, we bring the essential pieces of digital
            marketing together around your business goals.
          </p>

        </header>

        {/* =========================
            SERVICES GRID
        ========================= */}

        <div className="marketing-services__grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="marketing-service-card"
                key={service.number}
              >

                <div className="marketing-service-card__top">

                  <span className="marketing-service-card__number">
                    {service.number}
                  </span>

                  <div className="marketing-service-card__icon">
                    <Icon />
                  </div>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <div className="marketing-service-card__bottom">

                  <span>
                    Digital Marketing
                  </span>

                  <FiArrowUpRight />

                </div>

              </article>
            );
          })}

        </div>

        {/* =========================
            BOTTOM NOTE
        ========================= */}

        <div className="marketing-services__note">

          <span />

          <p>
            The right channel depends on your audience,
            goals and business model.
          </p>

          <span />

        </div>

      </div>
    </section>
  );
}
 
 



 