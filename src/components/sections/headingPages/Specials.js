import Carousel from "./SpecialsCarousel";
import GreekSalad from "../../../assets/food/GreekSalad.jpg";
import Bruschetta from "../../../assets/food/bruschetta.jpg";
import LemonDessert from "../../../assets/food/lemon dessert.jpg";
import SpecialCard from "./CardInfo/SpecialCard";

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This week's specials</h1>
        <a
          className="action-button"
          href={require("../../../assets/Menu.png")}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a>
      </article>
      <section className="specials-cards">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>
      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
