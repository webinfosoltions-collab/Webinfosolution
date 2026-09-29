import "./StoreTransformation.css";
import { useState } from "react";

import before from "../../../assets/images/home/before-store.png";
import after from "../../../assets/images/home/after-store.png";

export default function StoreTransformation() {
  const [v, setV] = useState(54);

  return (
    <section className="section blue-soft store-transform-section">
      <div className="container">

        <div className="section-head store-transform-head">
          <span className="eyebrow">
            STORE TRANSFORMATION
          </span>

          <h2>
            From “Just Another Store”{" "}
            <span className="accent">
              To A Brand Customers Remember.
            </span>
          </h2>
        </div>

        <div className="store-transform-demo">

          <div className="compare">

            <img
              src={before}
              alt="Dummy before ecommerce store"
              className="compare-image"
            />

            <div
              className="after-wrap"
              style={{ width: `${v}%` }}
            >
              <img
                src={after}
                alt="Dummy after Shopify redesign"
                className="compare-after-image"
              />
            </div>

            <div
              className="divider"
              style={{ left: `${v}%` }}
            >
              <div className="divider-button">
                <span>‹</span>
                <span>›</span>
              </div>
            </div>

            <input
              aria-label="Before and after comparison"
              type="range"
              min="8"
              max="92"
              value={v}
              onChange={(e) => setV(Number(e.target.value))}
            />

            <span className="label before">
              BEFORE
            </span>

            <span className="label after">
              AFTER
            </span>

          </div>

        </div>

        <div className="transform-tags">
          {[
            "Better UX",
            "Faster Store",
            "Mobile Optimized",
            "Clear Navigation",
            "Conversion Focused",
          ].map((t) => (
            <span key={t}>
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}