
import './WhyChooseUs.css';

const items = [
  [
    'Commerce-First Thinking',
    'Every design decision supports the customer’s buying journey.',
    'We do not design stores just to look impressive. Every section, button and product interaction is planned to move visitors closer to a purchase.',
    'More clarity. Better customer journeys. Stronger conversions.'
  ],
  [
    'Development + Marketing',
    'Development and growth expertise under one roof.',
    'Your website and marketing should work as one system. We build the experience with both performance and growth in mind from the beginning.',
    'One team. One direction. Less friction.'
  ],
  [
    'Mobile First',
    'Every experience is designed for modern mobile customers.',
    'Most customers discover and browse brands on mobile. That is why we prioritize fast, clean and effortless experiences across smaller screens first.',
    'Better mobile experience. More opportunities to convert.'
  ],
  [
    'Performance Focused',
    'Clean implementation without unnecessary website bloat.',
    'A beautiful website means little if customers have to wait for it. We focus on lean implementation, smooth interactions and a faster experience.',
    'Faster experiences create better first impressions.'
  ],
  [
    'Built For Growth',
    'Stores are designed to evolve as products and campaigns scale.',
    'Your business will change. Your website should be ready for it. We create flexible foundations that can grow with new products, campaigns and opportunities.',
    'Launch today. Build for tomorrow.'
  ],
  [
    'Clear Communication',
    'Straightforward updates without unnecessary technical complexity.',
    'You should always know what is being built, why it matters and what comes next. We keep communication direct, transparent and easy to understand.',
    'Clear process. Clear decisions. Better collaboration.'
  ]
];


/* =========================================================
   LETTER REVEAL FUNCTION
========================================================= */

const revealText = (text, className = '') => {
  return (
    <span className={`letter-reveal ${className}`}>
      {text.split('').map((char, index) => (
        <span
          className="reveal-letter"
          style={{
            '--delay': `${index * 0.018}s`
          }}
          key={`${char}-${index}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};


export default function WhyChooseUs() {
  return (
    <section className="section why-section">

      <div className="container">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div className="section-head why-head">

          <span className="eyebrow">
            WHY WEBINFOSOLUTION
          </span>

          <h2>
            Built Differently.{' '}
            <span className="accent">
              Because Growth Requires More.
            </span>
          </h2>

          <p className="why-intro">
            We combine strategy, design, development and growth
            thinking to create digital experiences that are built
            for real business results.
          </p>

        </div>


        {/* ==================================================
            CARDS
        ================================================== */}

        <div className="why-grid">

          {items.map(([h, p, detail, result], i) => (

            <article
              className="why-card"
              key={h}
            >

              {/* NUMBER */}

              <div className="why-number">
                0{i + 1}
              </div>


              {/* NORMAL CONTENT */}

              <div className="why-main">

                <h3>
                  {h}
                </h3>

                <p>
                  {p}
                </p>

              </div>


              {/* ==================================================
                  CINEMATIC HOVER CONTENT
              ================================================== */}

              <div className="why-hover-content">

                <span className="why-hover-label">
                  {revealText('WHY IT MATTERS')}
                </span>


                <p>
                  {revealText(detail)}
                </p>


                <strong>
                  {revealText(result, 'result-reveal')}
                </strong>

              </div>


              {/* ARROW */}

              <span className="why-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

