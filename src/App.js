import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isHideOrShowCart = useSelector(state => state.main.isCartVisible);
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    fetch('https://react-joke-course-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    })
  }, [cart])
  return (
    <Layout>
      {isHideOrShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
