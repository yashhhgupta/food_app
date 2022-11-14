import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import React, { useEffect, useState } from "react";

const AvailableMeals =()=>{
  const [meals, setmeals] = useState([]);
  const priceArray = [123.45, 34.56, 305.67, 46.78, 67.89, 67.90,230.56,90.78,100.56,89.08,65.89];

  const fetchData = () => {
    return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((response) => response.json())
      .then((data) => setmeals(data.meals));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(meals);
  let k=0;
  const mealsList2 = meals.map((meal) => {
    
    let obj = {
      ...meal,
      price: priceArray[k],
    };
    k++;
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