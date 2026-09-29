
import React from "react";

import {
  SiWordpress,
  SiShopify,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGit,
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { TbApi } from "react-icons/tb";

import "./WebTechnology.css";

const technologies = [
  {
    name: "WordPress",
    description: "Flexible CMS & business websites",
    icon: SiWordpress,
  },
  {
    name: "Shopify",
    description: "eCommerce stores & storefronts",
    icon: SiShopify,
  },
  {
    name: "React",
    description: "Interactive modern applications",
    icon: SiReact,
  },
  {
    name: "JavaScript",
    description: "Dynamic web functionality",
    icon: SiJavascript,
  },
  {
    name: "HTML5",
    description: "Semantic web structure",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    description: "Responsive visual experiences",
    icon: DiCss3,
  },
  {
    name: "REST APIs",
    description: "Connected digital systems",
    icon: TbApi,
  },
  {
    name: "Git",
    description: "Version control & collaboration",
    icon: SiGit,
  },
];

/*
  Duplicate the technology list so the marquee
  can move continuously without a visible gap.
*/
const topRow = [...technologies, ...technologies];

const bottomRow = [
  ...technologies.slice(4),
  ...technologies,
  ...technologies.slice(0, 4),
];

function TechnologyCard({ technology }) {
  const Icon = technology.icon;

  return (
    <article className="web-technology-card">

      <div className="web-technology-card__icon">
        <Icon />
      </div>

      <div className="web-technology-card__content">
        <h3>{technology.name}</h3>

        <p>{technology.description}</p>
      </div>

      <span className="web-technology-card__arrow">
        ↗
      </span>

    </article>
  );
}

export default function WebTechnology() {
  return (
    <section
      className="web-technology"
      id="technology-stack"
    >
      <div className="web-technology__container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <header className="web-technology__header">

          <span className="web-technology__eyebrow">
            TECHNOLOGIES WE WORK WITH
          </span>

          <h2 className="web-technology__title">
            Our Technology <span>Stack</span>
          </h2>

          <p className="web-technology__intro">
            We choose technologies based on the requirements
            of each project, creating practical solutions that
            are maintainable, responsive and ready to grow.
          </p>

        </header>

      </div>

      {/* =================================================
          TOP CAROUSEL
          LEFT → RIGHT
      ================================================= */}

      <div className="web-technology__marquee">

        <div className="web-technology__fade web-technology__fade--left" />
        <div className="web-technology__fade web-technology__fade--right" />

        <div className="web-technology__track web-technology__track--forward">

          {topRow.map((technology, index) => (
            <TechnologyCard
              technology={technology}
              key={`top-${technology.name}-${index}`}
            />
          ))}

        </div>

      </div>

      {/* =================================================
          BOTTOM CAROUSEL
          RIGHT → LEFT
      ================================================= */}

      <div className="web-technology__marquee web-technology__marquee--second">

        <div className="web-technology__fade web-technology__fade--left" />
        <div className="web-technology__fade web-technology__fade--right" />

        <div className="web-technology__track web-technology__track--reverse">

          {bottomRow.map((technology, index) => (
            <TechnologyCard
              technology={technology}
              key={`bottom-${technology.name}-${index}`}
            />
          ))}

        </div>

      </div>

      {/* =================================================
          BOTTOM NOTE
      ================================================= */}

      <div className="web-technology__container">

        <div className="web-technology__bottom">

          <span className="web-technology__bottom-line" />

          <p>
            The technology is selected around the project —
            not the other way around.
          </p>

          <span className="web-technology__bottom-line" />

        </div>

      </div>

    </section>
  );
}
 
