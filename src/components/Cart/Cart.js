import CartItem from './CartItem';
import './Cart.css';

import {useSelector} from 'react-redux'

function Cart() {

  const cart = useSelector(state=>state.cart)
  const produce = useSelector(state=>state.produce)

  console.log(cart);
  console.log(produce);


  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    });



console.log('-=-=-=-=-=');
console.log(cartItems);
console.log('-=-=-=-=-=');



  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
  }

  console.log('---->',cartItems);

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart;