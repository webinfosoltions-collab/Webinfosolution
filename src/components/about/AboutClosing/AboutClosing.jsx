import "./AboutClosing.css";

export default function AboutClosing() {
  return (
    <section className="about-closing">
      <div className="about-closing__container">

        {/* TOP LABEL */}
        <div className="about-closing__label">
          <span></span>
          A CONTINUING JOURNEY
          <span></span>
        </div>


        {/* MAIN STATEMENT */}
        <div className="about-closing__statement">

          <div className="about-closing__circle">
            <span>+</span>
          </div>

          <h2>
            We are not finished.
          </h2>

          <h3>
            And that's <em>the point.</em>
          </h3>

        </div>


        {/* DESCRIPTION */}
        <p className="about-closing__description">
          We believe great digital work keeps evolving.
          There is always something new to understand,
          something smarter to build and something better
          to improve.
        </p>


        {/* BOTTOM QUOTE */}
        <div className="about-closing__quote">
          <span className="about-closing__quote-mark">“</span>

          <p>
            Still building. Still learning.
            <strong> Still improving.</strong>
          </p>

          <span className="about-closing__quote-mark">”</span>
        </div>

      </div>
    </section>
  );
}