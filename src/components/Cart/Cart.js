import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const Cart = (props) => {

  const cartItems = useSelector((store) => store.cart.items); 

  const content = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
    </Card>
  );
};

export default Cart;
