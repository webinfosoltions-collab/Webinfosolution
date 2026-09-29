
import { useEffect, useState } from "react";
import "./CustomTheme.css";

// Apni real Shopify project images yahan set kar dena
import project1 from "../../../assets/images/shopify/prao.jpg";
import project2 from "../../../assets/images/shopify/prao.jpg";
import project3 from "../../../assets/images/shopify/prao.jpg";

export default function CustomTheme() {

  const projects = [project1, project2, project3];

  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);


  return (
    <section className="custom-theme-section">
      <div className="custom-theme-container">

        {/* ================= HEADER ================= */}

        <header className="custom-theme-header">

          <span className="custom-theme-eyebrow">
            <span></span>
            CUSTOM THEME DEVELOPMENT
            <span></span>
          </span>

          <h2>
            Custom when the brand and buying journey
            <strong>need more control.</strong>
          </h2>

          <p>
            We create reusable, editor-friendly sections so the store can
            stay distinctive without becoming painful to maintain.
          </p>

        </header>


        {/* ================= SHOWCASE ================= */}

        <div className="custom-theme-showcase">


          {/* =================================================
              LEFT — SAME PREVIOUS CARD / IMAGE SLIDER
          ================================================= */}

          <div className="custom-theme-main">

            <div className="custom-theme-main-top">

              <span>
                SHOPIFY THEME
              </span>

              <span>
                {String(activeProject + 1).padStart(2, "0")} / 03
              </span>

            </div>


            {/* FIXED IMAGE BOX */}

            <div className="custom-theme-screen">

              {projects.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt={`Shopify project ${index + 1}`}
                  className={`shopify-project-image ${
                    activeProject === index ? "active" : ""
                  }`}
                />

              ))}

            </div>


            {/* SAME FOOTER */}

            <div className="custom-theme-main-footer">

              <div className="shopify-slider-dots">

                {projects.map((_, index) => (

                  <button
                    key={index}
                    type="button"
                    aria-label={`Show Shopify project ${index + 1}`}
                    className={
                      activeProject === index ? "active" : ""
                    }
                    onClick={() => setActiveProject(index)}
                  />

                ))}

              </div>


              <div className="shopify-slider-labels">

                <span>DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>RESPONSIVE</span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — SAME THREE CARDS
          ================================================= */}

          <div className="custom-theme-side">


            {/* ================= CARD 01 ================= */}

            <article className="theme-info theme-info--orange">

              <div className="theme-info-number">
                01
              </div>


              {/* Shopify Sections Visual */}

              <div className="theme-visual theme-visual-sections">

                <div className="browser-top">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="browser-layout">

                  <div className="browser-image"></div>

                  <div className="browser-content">

                    <span></span>
                    <span></span>
                    <span></span>

                    <b></b>

                  </div>

                </div>

              </div>


              <div className="theme-info-content">

                <small>
                  CUSTOM SECTIONS
                </small>

                <h3>
                  Designed around
                  <br />
                  your content.
                </h3>

                <p>
                  Reusable sections built around your products,
                  content and brand requirements.
                </p>

              </div>

            </article>


            {/* ================= CARD 02 ================= */}

            <article className="theme-info theme-info--navy">

              <div className="theme-info-number">
                02
              </div>


              {/* Responsive Devices Visual */}

              <div className="theme-visual theme-visual-devices">

                <div className="device-laptop">

                  <div className="laptop-screen">

                    <div className="laptop-header"></div>

                    <div className="laptop-grid">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>


                <div className="device-phone">

                  <div className="phone-header"></div>

                  <div className="phone-content">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              </div>


              <div className="theme-info-content">

                <small>
                  RESPONSIVE DEVELOPMENT
                </small>

                <h3>
                  One experience,
                  <br />
                  every screen.
                </h3>

                <p>
                  Responsive layouts carefully adapted for desktop,
                  tablet and mobile storefronts.
                </p>

              </div>

            </article>


            {/* ================= CARD 03 ================= */}

            <article className="theme-info theme-info--light">

              <div className="theme-info-number">
                03
              </div>


              {/* Shopify Theme Editor Visual */}

              <div className="theme-visual theme-visual-editor">

                <div className="editor-top">

                  <span></span>

                  <div>
                    <i></i>
                    <i></i>
                  </div>

                </div>


                <div className="editor-layout">

                  <div className="editor-sidebar">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </div>


                  <div className="editor-main">

                    <div className="editor-title"></div>

                    <div className="editor-block"></div>

                    <div className="editor-lines">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>

                </div>

              </div>


              <div className="theme-info-content">

                <small>
                  EDITABLE SECTIONS
                </small>

                <h3>
                  Easy to manage,
                  <br />
                  built to scale.
                </h3>

                <p>
                  Clean reusable components that make future
                  storefront updates easier to manage.
                </p>

              </div>

            </article>

          </div>

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="custom-theme-statement">

          <div className="statement-mark">
            +
          </div>

          <p>
            <strong>Custom development.</strong>{" "}
            More control over how your store looks, feels and grows.
          </p>

        </div>

      </div>
    </section>
  );
}



