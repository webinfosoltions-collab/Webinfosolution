import "./ServicesBento.css";
import { services } from "../../../data/services";
import { Link } from "react-router-dom";

export default function ServicesBento() {
  return (
    <section className="section ws-services-section">

      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="section-head ws-services-head">

          <span className="eyebrow">
            CAPABILITIES
          </span>

          <h2>
            One Team For The{" "}
            <span className="accent">
              Store, Traffic & Growth.
            </span>
          </h2>

        </div>


        {/* =========================
            SERVICES GRID
        ========================== */}

        <div className="ws-services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`ws-service-card ${
                  service.featured
                    ? "ws-service-featured"
                    : ""
                } item-${index}`}
              >

                {/* =====================
                    ABSTRACT VISUAL
                ====================== */}

                <div className="ws-card-visual">

                  <div className="ws-visual-grid"></div>

                  <div className="ws-glow"></div>

                  <div className="ws-orb ws-orb-one"></div>
                  <div className="ws-orb ws-orb-two"></div>

                  <div className="ws-visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="ws-visual-label">
                    <span>●</span>
                    DIGITAL
                  </div>

                  <div className="ws-visual-arrow">
                    ↗
                  </div>

                </div>


                {/* =====================
                    CARD CONTENT
                ====================== */}

                <div className="ws-service-content">

                  <div className="ws-service-icon">
                    <Icon />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.desc}
                  </p>

                  <Link
                    to={service.href}
                    className="ws-service-link"
                  >
                    {service.featured
                      ? "Explore Shopify"
                      : "Learn more"}

                    <span>→</span>
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}