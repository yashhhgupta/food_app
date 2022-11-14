import Card from "../UI/Card";
import classes from "./Cart.module.css";
import {useContext,useState} from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import OrderMessage from "./OrderMessage";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
   const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
   };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          image={item.image}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler =()=>{
    // cartCtx.items=[];
    // cartCtx.totalAmount=0;
    cartCtx.clearCart();
    setOrderPlaced(true);
  }

  return (
    <>
      {orderPlaced && <OrderMessage></OrderMessage>}
      {!orderPlaced && (
        <section className={classes.meals}>
          <Card>
            {hasItems && (
              <div className={classes.body}>
                {cartItems}
                <div className={classes.total}>
                  <span>Total Amount</span>
                  <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                  <button className={classes.button} onClick={orderHandler}>
                    Order
                  </button>
                </div>
              </div>
            )}
            {!hasItems && (
              <div className={classes.body} style={{ textAlign: "center" }}>
                <h1>Your Cart is empty</h1>
                <h1>
                  <Link
                    style={{ textDecoration: "none", color: "#8a2b06" }}
                    to="/meals"
                  >
                    Add items
                  </Link>{" "}
                  to place an order
                </h1>
              </div>
            )}
          </Card>
        </section>
      )}
    </>
  );
};

export default Cart;
