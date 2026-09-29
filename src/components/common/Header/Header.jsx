import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaChevronDown,
  FaShopify,
  FaTimes,
} from "react-icons/fa";

import logo from "../../../assets/logos/webinfosolution-logo.svg";
import "./Header.css";

const serviceLinks = [
  ["Shopify Development", "/shopify-development"],
  ["WordPress Development", "/web-development"],
  ["Custom Web Development", "/web-development"],
  ["SEO", "/digital-marketing"],
  ["Google Ads", "/digital-marketing"],
  ["Meta Ads", "/digital-marketing"],
  ["GMB / Local SEO", "/digital-marketing"],
  ["CRO & Analytics", "/digital-marketing"],
];

export default function Header() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);

  /*
    HERO ONLY
    Home page = dark/video style
    Other pages = white style
  */
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Close mobile menu whenever route changes
  */
  useEffect(() => {
    setMobile(false);
    setMega(false);
  }, [location.pathname]);

  return (
    <header
      className={`header-ws
        ${isHome ? "hero-header-ws" : "inner-header-ws"}
        ${scrolled ? "scrolled-ws" : ""}
      `}
    >

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <div className="container-ws header-inner-ws">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="brand-ws"
          onClick={() => setMobile(false)}
        >
          <img
            src={logo}
            alt="WEBINFOSOLUTION logo"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="desktop-nav-ws"
          aria-label="Primary"
        >

          <NavLink to="/">
            Home
          </NavLink>


          <NavLink
            className="shopify-nav-ws"
            to="/shopify-development"
          >
            <FaShopify />
            Shopify
          </NavLink>


          {/* ================= SERVICES ================= */}

          <div
            className="mega-wrap-ws"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >

            <button
              className="nav-btn-ws"
              aria-expanded={mega}
              onClick={() => setMega(!mega)}
              onFocus={() => setMega(true)}
            >
              Services
              <FaChevronDown />
            </button>


            <AnimatePresence>
              {mega && (
                <motion.div
                  className="mega-ws"

                  initial={{
                    opacity: 0,
                    y: 10,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                >

                  <div className="mega-shopify-ws">

                    <FaShopify />

                    <span>
                      Shopify-first expertise
                    </span>

                    <strong>
                      Build a store designed to sell.
                    </strong>

                    <Link to="/shopify-development">
                      Explore Shopify →
                    </Link>

                  </div>


                  <div className="mega-links-ws">

                    {serviceLinks.map(([t, h]) => (
                      <Link
                        key={t}
                        to={h}
                      >
                        {t}
                      </Link>
                    ))}

                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>


          <NavLink to="/work">
            Work
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/insights">
            Insights
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>


        {/* =================================================
            CTA
        ================================================= */}

        <Link
          className="header-cta-ws"
          to="/contact"
        >
          Start a Project →
        </Link>


        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

        <button
          className="mobile-toggle-ws"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle navigation"
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobile && (

          <motion.div
            className="mobile-panel-ws"

            initial={{
              height: 0,
              opacity: 0,
            }}

            animate={{
              height: "auto",
              opacity: 1,
            }}

            exit={{
              height: 0,
              opacity: 0,
            }}
          >

            <div className="container-ws mobile-links-ws">

              {[
                ["Home", "/"],
                ["Shopify Development", "/shopify-development"],
                ["Web Development", "/web-development"],
                ["Digital Marketing", "/digital-marketing"],
                ["Work", "/work"],
                ["About", "/about"],
                ["Insights", "/insights"],
                ["Contact", "/contact"],
              ].map(([t, h]) => (

                <NavLink
                  key={t}
                  to={h}
                  onClick={() => setMobile(false)}
                >
                  {t}
                </NavLink>

              ))}


              <Link
                className="mobile-cta-ws"
                to="/contact"
                onClick={() => setMobile(false)}
              >
                Start a Project →
              </Link>

            </div>

          </motion.div>

        )}
      </AnimatePresence>

    </header>
  );
}