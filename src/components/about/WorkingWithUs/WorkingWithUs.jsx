import "./WorkingWithUs.css";

export default function WorkingWithUs() {
  const points = [
    {
      title: "Clear Communication",
      text: "Simple, honest and focused conversations."
    },
    {
      title: "Real Understanding",
      text: "We understand the business behind the project."
    },
    {
      title: "Attention to Detail",
      text: "Small details that make the final experience better."
    },
    {
      title: "Long-Term Thinking",
      text: "Building relationships, not just deliverables."
    }
  ];

  return (
    <section className="working-with-us">
      <div className="working-with-us__container">

        <div className="working-with-us__header">
          <span>CLIENT EXPERIENCE</span>

          <h2>
            Working <b>With Us</b>
          </h2>

          <i></i>
        </div>

        <div className="working-with-us__intro">
          <h3>
            Good collaboration should feel <b>simple.</b>
          </h3>

          <p>
            We value clarity, trust and thoughtful collaboration
            throughout every relationship.
          </p>
        </div>

        <div className="working-with-us__list">
          {points.map((item, index) => (
            <div className="working-with-us__item" key={item.title}>

              <span className="working-with-us__number">
                0{index + 1}
              </span>

              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

              <strong>+</strong>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}