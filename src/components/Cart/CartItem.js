import styles from "./CartItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const { id, title, price, total, quantity } = props.item;
  const dispatchNumbersCart = useDispatch();
  const addGoodsToCart = () => {
    dispatchNumbersCart(cartActions.incrementGood({
      id,
      price,
    }));
  };
  const removeGoodsFromCart = () => {
    dispatchNumbersCart(cartActions.decrementGood(id));
  };
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
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
