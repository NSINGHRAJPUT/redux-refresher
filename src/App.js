import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart)
  
  useEffect(()=>{
    fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    {
      method : 'PUT',
      body : JSON.stringify(cart),
    }).then(res=>{
      if(res.ok){
        res.json().then(data=>console.log('request successful'))
      }else{
        res.json().then(data=>alert('request Failed'))
      }
    })
  },[cart])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
