
import React from "react";
import {
  FiCode,
  FiFileText,
  FiMapPin,
  FiSearch,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";

import "./MarketingSEO.css";

const pillars = [
  {
    number: "01",
    icon: FiCode,
    title: "Technical SEO",
    text: "Improve website structure, crawlability, indexing and technical performance.",
    items: [
      "Site Structure",
      "Crawl & Indexing",
      "Technical Audits",
    ],
  },
  {
    number: "02",
    icon: FiFileText,
    title: "On-Page SEO",
    text: "Optimize pages around relevant searches, useful content and clear information.",
    items: [
      "Keyword Strategy",
      "Content Structure",
      "Internal Linking",
    ],
  },
  {
    number: "03",
    icon: FiMapPin,
    title: "Local SEO",
    text: "Strengthen local visibility through location signals and Google Business Profile.",
    items: [
      "Local Search",
      "GBP Optimization",
      "Location Pages",
    ],
  },
];

const optimizationItems = [
  "Keyword Research",
  "Competitor Research",
  "Technical Audits",
  "Content Strategy",
  "Local SEO",
  "SEO Reporting",
];

export default function MarketingSEO() {
  return (
    <section className="marketing-seo">

      <div className="marketing-seo__container">

        {/* =========================
            HEADER
        ========================= */}

        <header className="marketing-seo__header">

          <span className="marketing-seo__eyebrow">
            SEO & ORGANIC GROWTH
          </span>

          <h2 className="marketing-seo__title">
            Build Visibility That{" "}
            <span>Grows Over Time</span>
          </h2>

          <p className="marketing-seo__intro">
            Search visibility is built through useful content,
            technically sound websites and a clear understanding
            of what your audience is searching for.
          </p>

        </header>

        {/* =========================
            SEO PILLARS
        ========================= */}

        <div className="marketing-seo__pillars">

          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                className="marketing-seo__pillar"
                key={pillar.number}
              >

                <div className="marketing-seo__pillar-top">

                  <span className="marketing-seo__number">
                    {pillar.number}
                  </span>

                  <div className="marketing-seo__icon">
                    <Icon />
                  </div>

                  <FiArrowUpRight className="marketing-seo__arrow" />

                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.text}</p>

                <div className="marketing-seo__items">

                  {pillar.items.map((item) => (
                    <div key={item}>
                      <FiCheck />
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

              </article>
            );
          })}

        </div>

        {/* =========================
            OPTIMIZATION STRIP
        ========================= */}

        <div className="marketing-seo__optimization">

          <div className="marketing-seo__optimization-heading">

            <div className="marketing-seo__search-icon">
              <FiSearch />
            </div>

            <div>
              <span>SEO FOUNDATION</span>
              <strong>What We Work On</strong>
            </div>

          </div>

          <div className="marketing-seo__optimization-list">

            {optimizationItems.map((item) => (
              <div key={item}>
                <span />
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* =========================
            DISCLAIMER
        ========================= */}

        <p className="marketing-seo__note">
          SEO performance depends on the market, competition,
          website condition and ongoing search behavior. Our focus
          is on sustainable improvements rather than guaranteed rankings.
        </p>

      </div>

    </section>
  );
}
 
