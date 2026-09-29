 
import React from "react";
import {
  FiBarChart2,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import "./MarketingHero.css";

export default function MarketingHero() {
  return (
    <section className="marketing-hero">

      <div className="marketing-hero__container">

        {/* =========================
            HERO CONTENT
        ========================= */}

        <div className="marketing-hero__content">

          <span className="marketing-hero__eyebrow">
            DIGITAL MARKETING
          </span>

          <h1 className="marketing-hero__title">
            Digital Marketing That Drives{" "}
            <span>Real Growth</span>
          </h1>

          <p className="marketing-hero__description">
            Reach the right audience, build your online presence
            and turn digital marketing into a measurable growth
            channel.
          </p>

          <div className="marketing-hero__services">

            <span>
              <FiSearch />
              SEO
            </span>

            <span>
              <FiTarget />
              Google Ads
            </span>

            <span>
              <FiUsers />
              Social Media
            </span>

            <span>
              <FiBarChart2 />
              Analytics
            </span>

          </div>

        </div>

        {/* =========================
            MARKETING VISUAL
        ========================= */}

        <div className="marketing-hero__visual">

          <div className="marketing-hero__glow" />

          <div className="marketing-hero__dashboard">

            {/* DASHBOARD TOP */}

            <div className="marketing-hero__dashboard-top">

              <div>
                <span>Marketing Overview</span>
                <strong>Digital Performance</strong>
              </div>

              <div className="marketing-hero__status">
                <i />
                Active
              </div>

            </div>

            {/* MAIN CHART */}

            <div className="marketing-hero__chart-card">

              <div className="marketing-hero__chart-header">

                <div>
                  <span>Campaign Performance</span>
                  <strong>Growth Activity</strong>
                </div>

                <FiTrendingUp />

              </div>

              <div className="marketing-hero__chart">

                <div className="marketing-hero__chart-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 500 170"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 145 C45 138 60 125 92 130 C125 135 137 112 165 116 C195 120 204 95 235 100 C270 106 285 78 312 84 C340 90 354 61 380 67 C412 74 432 42 465 48 C480 51 490 38 500 34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="500"
                    cy="34"
                    r="6"
                    fill="currentColor"
                  />
                </svg>

              </div>

              <div className="marketing-hero__chart-labels">
                <span>Reach</span>
                <span>Traffic</span>
                <span>Leads</span>
                <span>Growth</span>
              </div>

            </div>

            {/* MINI METRICS */}

            <div className="marketing-hero__metrics">

              <div className="marketing-hero__metric">
                <div className="marketing-hero__metric-icon">
                  <FiSearch />
                </div>

                <div>
                  <span>SEO</span>
                  <strong>Organic</strong>
                </div>
              </div>

              <div className="marketing-hero__metric">
                <div className="marketing-hero__metric-icon">
                  <FiTarget />
                </div>

                <div>
                  <span>Ads</span>
                  <strong>Campaigns</strong>
                </div>
              </div>

              <div className="marketing-hero__metric">
                <div className="marketing-hero__metric-icon">
                  <FiUsers />
                </div>

                <div>
                  <span>Social</span>
                  <strong>Audience</strong>
                </div>
              </div>

            </div>

          </div>

          {/* FLOATING ANALYTICS CARD */}

          <div className="marketing-hero__floating-card">

            <div className="marketing-hero__floating-icon">
              <FiBarChart2 />
            </div>

            <div>
              <span>Analytics</span>
              <strong>Track. Learn. Optimize.</strong>
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          BOTTOM SCROLL INDICATOR
      ========================= */}

      <div className="marketing-hero__bottom">

        <span className="marketing-hero__bottom-line" />

        <span>
          Strategy • Reach • Visibility • Growth
        </span>

        <span className="marketing-hero__bottom-line" />

      </div>

    </section>
  );
}



