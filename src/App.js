import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import StatusBarMessage from './components/UI/StatusBarMessage.js'
import { mainActions } from './store/mainSlice';
import { getRemoteCart, sendCartData } from './store/cartSlice';
let initialStatus = true;
function App() {
  const isHideOrShowCart = useSelector(state => state.main.isCartVisible);
  const cart = useSelector(state => state.cart);
  const statusMessage = useSelector(state => state.main.fetchStatusState)
  const dispatchAction = useDispatch();
  useEffect(() => {
    dispatchAction(getRemoteCart());
  }, [dispatchAction]);
  useEffect(() => {
    if (initialStatus) {
      initialStatus = false;
      return
    }
    if (cart.isCartContentChanged) {
      dispatchAction(sendCartData(cart));
    }
    const timer = setTimeout(() => {
      dispatchAction(mainActions.changeFetchStatus(null));
    }, 3000);
    return () => { clearTimeout(timer) }
  }, [cart, dispatchAction])
  return (
    <Fragment>
      {statusMessage && <StatusBarMessage statusFetch={statusMessage} />}
      <Layout>
        {isHideOrShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
