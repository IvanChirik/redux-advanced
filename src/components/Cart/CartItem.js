import styles from "./CartItem.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const { title, price } = props.item;
  const numberGoods = useSelector(state => state.cart.numberOfGoodsCart);
  const totalAmount = useSelector(state => state.cart.totalAmountOfGood);
  const dispatchNumbersCart = useDispatch();
  const addGoodsToCart = () => {
    dispatchNumbersCart(cartActions.incrementGood());
  };
  const removeGoodsFromCart = () => {
    if (Math.floor(totalAmount) <= 0) {
      return
    }
    dispatchNumbersCart(cartActions.decrementGood());
  };
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${totalAmount.toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{numberGoods}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeGoodsFromCart}>-</button>
          <button onClick={addGoodsToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
