import { useContext } from "react";

import Form from "./Form";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  // console.log(cartCtx.items);
  // console.log(props.key);

  return (
    <li className={classes.meal}>
      <div style={{ padding: "1rem" }}>
        <img src={props.image} width="170"></img>
      </div>
      <div >
        <h3>{props.name}</h3>
        {/* {console.log(props.id)} */}
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
