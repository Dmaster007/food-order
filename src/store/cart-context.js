import  { createContext } from 'react'

const CartContext = createContext(
{
    items:[],
    total:0,
    addItem:()=>{},
    removeItem:()=>{}
}
);
export default CartContext;
