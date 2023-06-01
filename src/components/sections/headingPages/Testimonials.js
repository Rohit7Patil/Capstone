import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>
      <section className="testimonials-cards">
        <TestimonialCard
          name="Tim Lee"
          description="Little Lemon Restaurant is a hidden gem in OC. I was blown away by the Greek Salad - the feta cheese and Kalamata olives made it a perfect combination of savory and salty. The bruschetta was also a standout, with a generous serving of tomatoes and fresh herbs. And the lemon dessert was to die for! It was the perfect balance of sweet and tart. I can't wait to come back!"
        />
        <TestimonialCard
          name="Sarah Michaels"
          description="I had the pleasure of dining at Little Lemon Restaurant and it was fantastic. I tried the Greek Salad and it was so fresh and delicious. The bruschetta was equally amazing with the perfect blend of tomatoes, garlic, and basil. And the lemon dessert was a perfect way to finish off the meal. I highly recommend this restaurant!"
        />
        <TestimonialCard
          name="Jake Smith"
          description="Little Lemon Restaurant is a must-visit spot in OC! The Greek Salad was fresh and delicious - the perfect start to the meal. The bruschetta was equally amazing - the bread was perfectly toasted and the tomatoes were so juicy. And the lemon dessert was the perfect finish to a fantastic meal. I highly recommend trying all three of these dishes!"
        />
        <TestimonialCard
          name="Brittany Davis"
          description="Little Lemon Restaurant is one of my new favorite restaurants! The Greek Salad was amazing with a perfectly balanced dressing. The bruschetta was also a standout with fresh basil and the right amount of garlic. And the lemon dessert was a perfect way to end the meal - it was so light and refreshing. I highly recommend giving this restaurant a try!"
        />
      </section>
      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
