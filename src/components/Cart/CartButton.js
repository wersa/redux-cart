import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const counter = useSelector(store => store.cart.counter);
  const dispatch = useDispatch();
  

  return (
    <button onClick={() => dispatch(uiActions.showCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
