import "./GrowthEcosystem.css";
import { motion } from "framer-motion";

const nodes = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "CRO",
  "Analytics",
  "Email Marketing",
  "Retargeting",
];

export default function GrowthEcosystem() {
  return (
    <section className="section soft ws-growth-section">

      <div className="container center">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="section-head center ws-growth-head">

          <span className="eyebrow">
            GROWTH ECOSYSTEM
          </span>

          <h2>
            We Don't Just Build Your Store.{" "}
            <span className="accent">
              We Build Your Growth Engine.
            </span>
          </h2>

        </div>


        {/* =========================
            MAIN ECOSYSTEM
        ========================== */}

        <div className="ws-growth-ecosystem">

          {/* Background glow */}

          <div className="ws-ecosystem-glow"></div>


          {/* Animated pulse waves */}

          <span className="ws-pulse pulse-1"></span>
          <span className="ws-pulse pulse-2"></span>
          <span className="ws-pulse pulse-3"></span>


          {/* =========================
              CONNECTION NETWORK
          ========================== */}

          <svg
            className="ws-growth-connections"
            viewBox="0 0 860 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <path
              d="M430 280 L430 90"
              className="connection-line"
            />

            <path
              d="M430 280 L690 165"
              className="connection-line"
            />

            <path
              d="M430 280 L700 390"
              className="connection-line"
            />

            <path
              d="M430 280 L430 475"
              className="connection-line"
            />

            <path
              d="M430 280 L165 390"
              className="connection-line"
            />

            <path
              d="M430 280 L165 165"
              className="connection-line"
            />

            <path
              d="M430 280 L760 280"
              className="connection-line"
            />

          </svg>


          {/* =========================
              CENTER CORE
          ========================== */}

          <motion.div
            className="ws-growth-core"

            animate={{
              scale: [1, 1.035, 1],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="ws-core-inner">

              <span className="ws-core-small">
                POWERED BY
              </span>

              <strong>
                SHOPIFY
              </strong>

              <span className="ws-core-label">
                STORE
              </span>

            </div>

          </motion.div>


          {/* =========================
              GROWTH NODES
          ========================== */}

          {nodes.map((node, index) => (

            <motion.div
              key={node}

              className={`ws-growth-node ws-node-${index}`}

              initial={{
                opacity: 0,
                scale: 0.7,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.3,
              }}

              transition={{
                delay: index * 0.1,
                duration: 0.55,
                ease: "easeOut",
              }}

              animate={{
                y: [0, -5, 0],
              }}

              whileHover={{
                scale: 1.06,
                y: -6,
              }}
            >

              <span className="ws-node-dot"></span>

              <span>
                {node}
              </span>

            </motion.div>

          ))}


          {/* =========================
              MOVING PARTICLES
          ========================== */}

          <motion.span
            className="ws-network-particle particle-1"
            animate={{
              x: [0, 120, 0],
              y: [0, -55, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="ws-network-particle particle-2"
            animate={{
              x: [0, -120, 0],
              y: [0, 55, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="ws-network-particle particle-3"
            animate={{
              x: [0, 95, 0],
              y: [0, 70, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 1.8,
              ease: "easeInOut",
            }}
          />

        </div>


        {/* =========================
            GROWTH FLOW
        ========================== */}

        <motion.div
          className="ws-growth-flow"

          initial={{
            opacity: 0,
            y: 12,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <span>Design</span>

          <b>→</b>

          <span>Development</span>

          <b>→</b>

          <span>Traffic</span>

          <b>→</b>

          <span>Conversion</span>

          <b>→</b>

          <strong>Growth</strong>

        </motion.div>

      </div>

    </section>
  );
}