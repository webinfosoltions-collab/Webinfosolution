
import React from "react";
import {
  FiBarChart2,
  FiSearch,
  FiGlobe,
  FiCode,
  FiShoppingBag,
  FiTarget,
  FiTag,
  FiLayers,
} from "react-icons/fi";

import "./MarketingTechnology.css";

const technologies = [
  {
    name: "Google Ads",
    category: "Paid Advertising",
    icon: FiTarget,
  },
  {
    name: "Analytics",
    category: "Measurement",
    icon: FiBarChart2,
  },
  {
    name: "Search Console",
    category: "SEO",
    icon: FiSearch,
  },
  {
    name: "Meta Ads",
    category: "Social Advertising",
    icon: FiLayers,
  },
  {
    name: "Business Profile",
    category: "Local Marketing",
    icon: FiGlobe,
  },
  {
    name: "Tag Manager",
    category: "Tracking",
    icon: FiTag,
  },
  {
    name: "WordPress",
    category: "Web Platform",
    icon: FiCode,
  },
  {
    name: "Shopify",
    category: "eCommerce",
    icon: FiShoppingBag,
  },
];

const duplicatedTechnologies = [...technologies, ...technologies];

export default function MarketingTechnology() {
  return (
    <section className="marketing-technology">
      <div className="marketing-technology__container">

        {/* HEADER */}

        <header className="marketing-technology__header">

          <span className="marketing-technology__eyebrow">
            MARKETING TECHNOLOGY
          </span>

          <h2 className="marketing-technology__title">
            Tools That Support{" "}
            <span>Better Marketing</span>
          </h2>

          <p className="marketing-technology__intro">
            We use the right platforms for advertising, search,
            tracking, content and performance measurement — based
            on the needs of each project.
          </p>

        </header>

        {/* TECHNOLOGY SHOWCASE */}

        <div className="marketing-technology__showcase">

          <div className="marketing-technology__showcase-top">

            <div>
              <span>OUR DIGITAL TOOLKIT</span>
              <strong>Platforms & Technologies</strong>
            </div>

            <div className="marketing-technology__live">
              <i />
              Marketing Stack
            </div>

          </div>

          {/* ROW 01 */}

          <div className="marketing-technology__marquee marketing-technology__marquee--left">
            <div className="marketing-technology__track">

              {duplicatedTechnologies.map((technology, index) => {
                const Icon = technology.icon;

                return (
                  <article
                    className="marketing-technology__card"
                    key={`left-${technology.name}-${index}`}
                  >

                    <div className="marketing-technology__icon">
                      <Icon />
                    </div>

                    <div className="marketing-technology__card-content">
                      <strong>{technology.name}</strong>
                      <span>{technology.category}</span>
                    </div>

                  </article>
                );
              })}

            </div>
          </div>

          {/* ROW 02 */}

          <div className="marketing-technology__marquee marketing-technology__marquee--right">
            <div className="marketing-technology__track">

              {duplicatedTechnologies
                .slice()
                .reverse()
                .map((technology, index) => {
                  const Icon = technology.icon;

                  return (
                    <article
                      className="marketing-technology__card"
                      key={`right-${technology.name}-${index}`}
                    >

                      <div className="marketing-technology__icon">
                        <Icon />
                      </div>

                      <div className="marketing-technology__card-content">
                        <strong>{technology.name}</strong>
                        <span>{technology.category}</span>
                      </div>

                    </article>
                  );
                })}

            </div>
          </div>

        </div>

        {/* BOTTOM MESSAGE */}

        <div className="marketing-technology__bottom">

          <div className="marketing-technology__bottom-icon">
            <FiBarChart2 />
          </div>

          <div>
            <strong>Technology follows the strategy.</strong>
            <p>
              We select platforms and tools according to the
              campaign, audience, website and measurement needs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

