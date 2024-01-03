import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
const [btnIshighlighted, setbtnhighlighted] = useState(false);
const cartCtx = useContext(CartContext);
const {items} = cartCtx
const Btnclass = `${classes.button} ${btnIshighlighted ? classes.bump:''}`
const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  console.log(curNumber);
  return +curNumber + Number(item.amount);
}, 0);
useEffect(()=>{
  
  if(items.length ===0){
    return;
  }

setbtnhighlighted(true);

const timer = setTimeout(() => {
  setbtnhighlighted(false);
}, 300);
return ()=>{(
  clearTimeout(timer)
)}
},[items])
  return (
    <button className={Btnclass} onClick={()=>{
      props.CardOpenHandler();
    }}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
