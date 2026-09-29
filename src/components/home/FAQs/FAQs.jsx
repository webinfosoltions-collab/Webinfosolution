import "./FAQs.css";
import { useState } from "react";
import { homeFaqs } from "../../../data/faqs";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section ws-faq-section">
      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="ws-faq-heading">

          <span className="eyebrow">
            FAQ
          </span>

          <h2>
            Questions Before You{" "}
            <span className="accent">
              Start Building?
            </span>
          </h2>

          <p>
            Clear answers to the practical questions clients usually ask
            before a Shopify or growth project.
          </p>

        </div>


        {/* =========================
            FAQ PANEL
        ========================== */}

        <div className="ws-faq-panel">

          <div className="ws-faq-panel-top">

            <span>
              COMMON QUESTIONS
            </span>

            <span className="ws-faq-count">
              {String(homeFaqs.length).padStart(2, "0")} QUESTIONS
            </span>

          </div>


          <div className="ws-faq-list">

            {homeFaqs.map((f, i) => {

              const active = open === i;

              return (
                <div
                  className={`ws-faq-row ${
                    active ? "is-active" : ""
                  }`}
                  key={f.q}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpen(active ? -1 : i)
                    }
                    aria-expanded={active}
                  >

                    <span className="ws-faq-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="ws-faq-question">
                      {f.q}
                    </span>

                    <span className="ws-faq-icon">
                      <FaArrowRight />
                    </span>

                  </button>


                  <AnimatePresence initial={false}>

                    {active && (
                      <motion.div
                        className="ws-faq-answer"
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
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >

                        <p>
                          {f.a}
                        </p>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </div>


          {/* =========================
              BOTTOM BRAND STRIP
          ========================== */}

          <div className="ws-faq-bottom">

            <span>
              Shopify
            </span>

            <i>•</i>

            <span>
              WordPress
            </span>

            <i>•</i>

            <span>
              Custom Development
            </span>

            <i>•</i>

            <span>
              Digital Growth
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}