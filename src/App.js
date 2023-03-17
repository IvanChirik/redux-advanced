import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const isHideOrShowCart = useSelector(state => state.main.isCartVisible);
  return (
    <Layout>
      {isHideOrShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
