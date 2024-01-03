import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Model from './Model';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const itemremovehandler = (id) => {
    // Implement the logic for removing an item
    cartCtx.removeItem(id)
  };

  const itemaddhandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const hasitems = cartCtx.items.length > 0;

  const cartitems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={itemaddhandler.bind(null,item)}
          onRemove={itemremovehandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Model>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={() => {
            props.CardCloseHandler();
          }}
        >
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}
