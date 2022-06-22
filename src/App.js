import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
// import { uiActions } from "./store/ui-slice";
// import { cartActions } from "./store/cart";
import { fetchCartData, sendCartData } from './store/cart-action'

let initial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((store) => store.ui.isShown);
  const showNotification = useSelector((store) => store.ui.notification);
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));

    }

    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}

        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
