import Card from "../UI/Card";
import styles from "./ProductItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cartSlice";

const ProductItem = (props) => {
  const dispatchCartHandler = useDispatch();
  const { title, price, description } = props;
  const addGoodsToCart = () => {
    dispatchCartHandler(cartActions.incrementGood());
  }
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addGoodsToCart}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
