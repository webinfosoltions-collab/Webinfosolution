import "./Performance.css";

export default function Performance() {
  const metrics = [
    {
      number: "90+",
      title: "Performance Goal",
      text: "Built with speed and Core Web Vitals in mind.",
    },
    {
      number: "Mobile First",
      title: "Every Store",
      text: "Responsive experiences designed for every screen.",
    },
    {
      number: "SEO Ready",
      title: "Architecture",
      text: "Clean foundations that support long-term visibility.",
    },
    {
      number: "Conversion",
      title: "Focused UX",
      text: "Every interaction designed to move users forward.",
    },
  ];

  return (
    <section className="performance">
      {/* BACKGROUND ELEMENTS */}
      <div className="performance__grid"></div>
      <div className="performance__glow performance__glow--one"></div>
      <div className="performance__glow performance__glow--two"></div>

      <div className="performance__container">

        {/* TOP HEADER */}
        <div className="performance__header">

          <div className="performance__eyebrow">
            <span className="performance__eyebrow-line"></span>
            <span>PERFORMANCE</span>
          </div>

          <div className="performance__heading-row">

            <h2 className="performance__title">
              Pretty Isn't Enough.
              <br />
              <span>Your Store Has To Perform.</span>
            </h2>

            <p className="performance__description">
              A beautiful store means little if it loads slowly, gets lost in
              search or fails to turn visitors into customers. We build with
              performance, visibility and conversion in mind from the start.
            </p>

          </div>

        </div>


        {/* METRICS */}
        <div className="performance__metrics">

          {metrics.map((item, index) => (
            <div
              className="performance-card"
              key={item.title}
            >

              <div className="performance-card__top">
                <span className="performance-card__number">
                  0{index + 1}
                </span>

                <span className="performance-card__arrow">
                  ↗
                </span>
              </div>

              <strong className="performance-card__metric">
                {item.number}
              </strong>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="performance-card__line">
                <span></span>
              </div>

            </div>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="performance__bottom">

          <div className="performance__bottom-mark">
            +
          </div>

          <p>
            Speed <strong>+</strong> Visibility <strong>+</strong> Experience{" "}
            <strong>+</strong> Conversion
          </p>

        </div>

      </div>
    </section>
  );
}