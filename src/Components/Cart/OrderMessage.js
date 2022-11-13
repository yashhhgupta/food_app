import Card from "../UI/Card";
import classes from "./OrderMessage.module.css";
const OrderMessage=()=>{
    return (
      <section className={classes.meals}>
        <Card>
          <div className={classes.body}>
            <h1>Your order has been placed</h1>
            <h2>It will be delivered to you ASAP</h2>
          </div>
        </Card>
      </section>
    );
}
export default OrderMessage;