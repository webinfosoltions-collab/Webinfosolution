import "./OurApproach.css";

export default function OurApproach() {
  const principles = [
    {
      title: "Understand Before We Build",
      text: "We take time to understand the real problem before choosing the solution."
    },
    {
      title: "Simplicity Has Value",
      text: "Good digital experiences should feel clear, intuitive and purposeful."
    },
    {
      title: "Quality Over Shortcuts",
      text: "We focus on thoughtful implementation instead of rushing toward the finish line."
    },
    {
      title: "Build for the Long Run",
      text: "We aim to create digital work that can evolve as the business grows."
    }
  ];

  return (
    <section className="our-approach">
      <div className="our-approach__container">

        {/* HEADER */}
        <div className="our-approach__header">
          <span className="our-approach__eyebrow">
            OUR PHILOSOPHY
          </span>

          <h2>
            How We <span>Think</span>
          </h2>

          <div className="our-approach__accent"></div>
        </div>


        {/* INTRO */}
        <div className="our-approach__intro">

          <div className="our-approach__intro-title">
            <span>GOOD WORK</span>

            <h3>
              Starts with
              <br />
              <em>good thinking.</em>
            </h3>
          </div>

          <div className="our-approach__intro-text">
            <p>
              We don't believe in choosing a solution simply
              because it is familiar or convenient. We believe
              in understanding first, thinking carefully and
              building with intention.
            </p>

            <div className="our-approach__small-line"></div>
          </div>

        </div>


        {/* PRINCIPLES */}
        <div className="our-approach__principles">

          {principles.map((item, index) => (
            <article
              className="our-approach__principle"
              key={item.title}
            >

              <div className="our-approach__index">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="our-approach__principle-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

              </div>

              <div className="our-approach__arrow">
                ↗
              </div>

            </article>
          ))}

        </div>


        {/* CLOSING */}
        <div className="our-approach__closing">

          <span></span>

          <p>
            Thoughtful by intention. Practical by nature.
          </p>

        </div>

      </div>
    </section>
  );
}