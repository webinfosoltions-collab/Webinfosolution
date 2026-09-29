 
import React from "react";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import "./WebPortfolio.css";

/*
  IMPORTANT:
  Replace these placeholder project details with your
  REAL projects, screenshots, links and descriptions.

  Do NOT use fake client names, results or statistics.
*/

const projects = [
  {
    name: "Corporate Website",
    category: "WordPress",
    description:
      "A professional corporate website designed to present services, build trust and create a clear digital presence.",
    technology: "WordPress",
    image: "/images/portfolio/project-1.jpg",
    link: "#",
  },
  {
    name: "eCommerce Store",
    category: "Shopify",
    description:
      "A modern eCommerce experience focused on product presentation, easy navigation and a smooth shopping journey.",
    technology: "Shopify",
    image: "/images/portfolio/project-2.jpg",
    link: "#",
  },
  {
    name: "Business Management System",
    category: "Custom Software",
    description:
      "A purpose-built web platform designed to organize business operations, workflows and everyday management tasks.",
    technology: "Custom Software",
    image: "/images/portfolio/project-3.jpg",
    link: "#",
  },
  {
    name: "Interactive Web Application",
    category: "React",
    description:
      "A responsive React application focused on interactive interfaces, structured data and a smooth user experience.",
    technology: "React",
    image: "/images/portfolio/project-4.jpg",
    link: "#",
  },
  {
    name: "Business Platform",
    category: "WordPress",
    description:
      "A clean and responsive business platform built around clear content structure and an easy-to-use interface.",
    technology: "WordPress",
    image: "/images/portfolio/project-5.jpg",
    link: "#",
  },
  {
    name: "Custom Storefront",
    category: "Shopify",
    description:
      "A tailored Shopify storefront created to provide a polished product browsing and purchasing experience.",
    technology: "Shopify",
    image: "/images/portfolio/project-6.jpg",
    link: "#",
  },
];

export default function WebPortfolio() {
  return (
    <section className="web-portfolio" id="selected-work">
      <div className="web-portfolio__container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <header className="web-portfolio__header">

          <span className="web-portfolio__eyebrow">
            SELECTED WORK
          </span>

          <h2 className="web-portfolio__title">
            Selected <span>Work</span>
          </h2>

          <p className="web-portfolio__intro">
            Explore some of the websites, stores and applications
            we've built across different technologies.
          </p>

        </header>

        {/* =========================
            PORTFOLIO GRID
        ========================= */}

        <div className="web-portfolio__grid">

          {projects.map((project, index) => (
            <article
              className="web-portfolio-card"
              key={`${project.name}-${index}`}
            >

              {/* PROJECT IMAGE */}

              <div className="web-portfolio-card__image-wrap">

                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="web-portfolio-card__image"
                  loading="lazy"
                />

                <div className="web-portfolio-card__image-overlay">
                  <span>
                    View Project
                    <FiArrowUpRight />
                  </span>
                </div>

                <div className="web-portfolio-card__badge">
                  {project.category}
                </div>

              </div>

              {/* PROJECT CONTENT */}

              <div className="web-portfolio-card__body">

                <div className="web-portfolio-card__top">

                  <span className="web-portfolio-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="web-portfolio-card__technology">
                    {project.technology}
                  </span>

                </div>

                <h3>
                  {project.name}
                </h3>

                <p>
                  {project.description}
                </p>

                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    className="web-portfolio-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <FiExternalLink />
                  </a>
                ) : (
                  <span className="web-portfolio-card__link web-portfolio-card__link--disabled">
                    <span>Project Preview</span>
                    <FiArrowUpRight />
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <div className="web-portfolio__bottom">

          <span className="web-portfolio__bottom-line" />

          <p>
            Different technologies. Different requirements.
            One focus — building useful digital experiences.
          </p>

          <span className="web-portfolio__bottom-line" />

        </div>

      </div>
    </section>
  );
}


