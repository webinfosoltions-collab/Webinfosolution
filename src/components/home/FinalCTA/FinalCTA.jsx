import "./FinalCTA.css";
import { useState } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { contactConfig } from "../../../data/contact";

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    website: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello WEBINFOSOLUTION,

I want to start a project.

Name: ${form.name}
Business / Website: ${form.website}
Requirement: ${form.requirement}

Please let me know the next steps.`;

    const whatsappUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="wis-final-cta">

      {/* Background Decoration */}
      <div className="wis-final-shape wis-shape-one"></div>
      <div className="wis-final-shape wis-shape-two"></div>

      <div className="container wis-final-wrapper">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="wis-final-content">

          <span className="eyebrow">
            READY WHEN YOU ARE
          </span>

          <h2>
            Ready To Build A Shopify Store{" "}
            <span>
              That Actually Feels Like Your Brand?
            </span>
          </h2>

          <p>
            Tell us what you're building and we'll help turn it into an
            ecommerce experience designed for growth.
          </p>

          <div className="wis-final-services">
            <span>Shopify</span>
            <i>•</i>
            <span>WordPress</span>
            <i>•</i>
            <span>Custom Development</span>
            <i>•</i>
            <span>Growth</span>
          </div>

        </div>


        {/* =========================
            WORKING FORM
        ========================== */}

        <div className="wis-project-card">

          <div className="wis-project-top">

            <div>
              <small>LET'S BUILD</small>
              <strong>Start A Project</strong>
            </div>

            <div className="wis-project-number">
              01
            </div>

          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="wis-form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* WEBSITE */}

            <div className="wis-form-group">

              <label htmlFor="website">
                Business / Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                placeholder="Your business or website"
                value={form.website}
                onChange={handleChange}
                required
              />

            </div>


            {/* REQUIREMENT */}

            <div className="wis-form-group">

              <label htmlFor="requirement">
                What do you need?
              </label>

              <textarea
                id="requirement"
                name="requirement"
                rows="4"
                placeholder="Tell us briefly about your project..."
                value={form.requirement}
                onChange={handleChange}
                required
              />

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="wis-project-btn"
            >
              Send On WhatsApp
              <FaWhatsapp />
            </button>

          </form>


          <div className="wis-form-note">
            <FaWhatsapp />
            Your project details will open directly in WhatsApp.
          </div>

        </div>

      </div>

    </section>
  );
}