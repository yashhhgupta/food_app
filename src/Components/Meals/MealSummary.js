import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Hungry?,Cooking Gone Wrong? OR Unexpected Guests?</h2>
      <div className={classes.body}>
        <p>Stay home  and order food at your doorstep</p>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default MealSummary;
