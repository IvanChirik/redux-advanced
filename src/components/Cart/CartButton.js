import styles from "./CartButton.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { mainActions } from "../../store/mainSlice";

const CartButton = (props) => {
  const numberGoods = useSelector(state => state.cart.totalAmount);
  const dispatchCartHandler = useDispatch();
  const showOrHideCartHandler = () => {
    dispatchCartHandler(mainActions.changeShowOrHideCard());
  }
  return (
    <button onClick={showOrHideCartHandler} className={styles.button}>
      <span>Корзина</span>
      <span className={styles.badge}>{numberGoods}</span>
    </button>
  );
};

export default CartButton;
