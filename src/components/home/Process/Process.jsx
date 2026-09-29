import "./Process.css";
import { motion } from "framer-motion";

const steps = [
  [
    "01",
    "Discovery",
    "Clarify goals, catalog, audience and what success should look like.",
  ],
  [
    "02",
    "Strategy",
    "Map the storefront, priorities, integrations and conversion opportunities.",
  ],
  [
    "03",
    "UX & Design",
    "Shape product discovery, navigation, PDPs and mobile buying journeys.",
  ],
  [
    "04",
    "Development",
    "Build clean, editable sections and connect the tools your store needs.",
  ],
  [
    "05",
    "Launch & Growth",
    "Launch carefully, measure behavior and improve based on real growth data.",
  ],
];

export default function Process() {
  return (
    <section className="wis-process-section">

      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
          className="wis-process-head"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            PROCESS
          </span>

          <h2>
            From Idea To{" "}
            <span>Revenue-Ready Store.</span>
          </h2>

          <p>
            A clear, structured process designed to take your ecommerce idea
            from strategy to launch and continuous growth.
          </p>
        </motion.div>


        {/* =========================
            PROCESS TIMELINE
        ========================== */}

        <div className="wis-process">

          {/* Background line */}

          <div className="wis-process-line"></div>

          {/* Animated progress */}

          <motion.div
            className="wis-process-progress"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />


          {/* Steps */}

          <div className="wis-process-grid">

            {steps.map(([number, title, description], index) => (
              <motion.article
                className="wis-process-step"
                key={number}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.25,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >

                {/* Number */}

                <motion.div
                  className="wis-process-number"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  {number}
                </motion.div>


                {/* Card */}

                <div className="wis-process-card">

                  <span className="wis-process-index">
                    STEP {number}
                  </span>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>

        </div>


        {/* =========================
            BOTTOM FLOW
        ========================== */}

        <motion.div
          className="wis-process-flow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <span>DISCOVER</span>
          <b>→</b>
          <span>DESIGN</span>
          <b>→</b>
          <span>BUILD</span>
          <b>→</b>
          <span>LAUNCH</span>
          <b>→</b>
          <strong>GROW</strong>
        </motion.div>

      </div>

    </section>
  );
}