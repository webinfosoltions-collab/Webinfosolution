import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="wisg-hero">

      {/* ==============================
          FULL HERO BACKGROUND VIDEO
      ============================== */}

      <video
        className="wisg-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/digital-growth-hero.mp4"
          type="video/mp4"
        />
      </video>


      {/* ==============================
          PREMIUM VIDEO OVERLAY
      ============================== */}

      <div className="wisg-hero-overlay"></div>


      {/* ==============================
          CENTER CONTENT
      ============================== */}

      <div className="wisg-hero-container">

        <motion.div
          className="wisg-hero-content"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* BADGE */}

          <span className="wisg-hero-badge">
            <FaShoppingBag />
            SHOPIFY • ECOMMERCE • GROWTH
          </span>


          {/* HEADING */}

          <h1 className="wisg-hero-title">
            We Build Shopify Stores{" "}
            <span>Designed to Sell.</span> Then We Help Them Grow.
          </h1>


          {/* PARAGRAPH */}

          <p className="wisg-hero-description">
            From high-converting Shopify stores to SEO, Google Ads and Meta
            campaigns, WEBINFOSOLUTION builds the complete digital system your
            business needs to attract customers, convert traffic and grow
            online.
          </p>


          {/* BUTTONS */}

          <div className="wisg-hero-actions">

            <Link
              className="wisg-hero-primary"
              to="/contact"
            >
              Build My Shopify Store
              <FaArrowRight />
            </Link>

            <Link
              className="wisg-hero-secondary"
              to="/work"
            >
              View Our Work
            </Link>

          </div>


          {/* TRUST ITEMS */}

          <div className="wisg-hero-trust">

            <span>
              <FaCheckCircle />
              Shopify-first builds
            </span>

            <span>
              <FaCheckCircle />
              Mobile-first UX
            </span>

            <span>
              <FaStar />
              Growth-ready tracking
            </span>

          </div>


          {/* BOTTOM TEXT */}

          <small className="wisg-hero-bottom">
            Shopify • WordPress • Custom Development • Performance Marketing
          </small>

        </motion.div>

      </div>

    </section>
  );
}