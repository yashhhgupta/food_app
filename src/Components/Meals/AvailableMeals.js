import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import React, { useEffect, useState } from "react";

const AvailableMeals =()=>{
  const [meals, setmeals] = useState([]);

  const fetchData = () => {
    return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((response) => response.json())
      .then((data) => setmeals(data.meals));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(meals);
  const mealsList2 = meals.map((meal) => {
    let obj = {
      ...meal,
      price: Math.floor(Math.random() * 100) + Math.random() * 100,
    };
    return obj;
  })

  // console.log(meals);

  const mealsList = mealsList2.map((meal) => {
      // console.log(meal.id)
      return (
        <MealItem
          id={meal.idMeal}
          name={meal.strMeal}
          price={meal.price}
          image={meal.strMealThumb}
        />
      );
  });
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
}
export default AvailableMeals;