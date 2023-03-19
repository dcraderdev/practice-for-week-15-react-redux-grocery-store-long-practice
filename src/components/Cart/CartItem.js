import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const produce = useSelector(state=>state.produce)

  
  console.log(produce);

  
  let vals = Object.values(produce)
  let newItem = vals.find((produceItem) => produceItem.id === item.id);
  console.log(vals);


  // console.log(item);
  // console.log(item.name);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;