import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useEffect } from 'react';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
    fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
    .then(res=>{
      res.json().then(data=>console.log(data))
    })
  },[])
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
