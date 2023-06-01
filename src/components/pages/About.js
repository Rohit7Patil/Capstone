export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>California</h2>
        <p className="about-subtext">
          Nestled in the heart of the charming city of California, in the USA, is the delightful "Little Lemon Restaurant". This cozy eatery is known for its bright and refreshing decor, featuring lemon-yellow walls and sparkling chandeliers. The menu is equally bright and fresh, with a focus on locally-sourced ingredients and simple, delicious flavors!
        </p>
      </section>
      <section className="double-image">
        <img
          className="about-1"
          src={require("../../assets/food/randomfood3.jpg")}
          alt="Little Lemon restaurant random food 3"
        ></img>
        <img
          className="about-2"
          src={require("../../assets/food/randomfood2.jpg")}
          alt="Little Lemon restaurant random food 2"
        ></img>
      </section>
    </article>
  );
}
