import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>
      <ul>
        {cartItems.map(cartItem => {
          return <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              quantity: cartItem.quantityItem,
              total: cartItem.totalPrice,
              price: cartItem.price,
            }}
          />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
