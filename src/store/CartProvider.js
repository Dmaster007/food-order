
import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartstate = {
    items: [],
    total: 0
}
const Cartreducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.total + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const exsitingCartItem = state.items[existingCartItemIndex];
    let updatedItem ;
    let updatedItems;

    if(exsitingCartItem){
      // let intamount = exsitingCartItem.amount
      // updatedItem = exsitingCartItem
      // updatedItem.amount = +intamount + Number(action.item.amount)

      updatedItem= {
        ...exsitingCartItem,
        amount : +exsitingCartItem.amount + Number(action.item.amount)
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
      
    }
    else{
    updatedItem = {...action.item}
    updatedItems = state.items.concat(action.item);
    }
    
    
   
    return {
      items: updatedItems,
      total: updatedTotalAmount
    };
  }
  if(action.type==='REMOVE'){
   
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const exsitingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.total - exsitingCartItem.price;
    let updatedItem ;
    let updatedItems;
    if(exsitingCartItem.amount ===1){
      updatedItems = state.items.filter(item=> item.id !==action.id)
    }
    else{
     updatedItem = {...exsitingCartItem,amount:exsitingCartItem.amount-1}
     updatedItems = [...state.items]
     updatedItems[existingCartItemIndex]= updatedItem
    }
    return {
      items: updatedItems,
      total: updatedTotalAmount
    };
    }
  return defaultCartstate;
};

export default function CartProvider(props) {
    const [casrtState, dispathCart] = useReducer(Cartreducer, defaultCartstate)
    const addtoCartHandler = (item) => {
      dispathCart({type:"ADD" , item:item})
    }
    const removetoCartHandler = (id) => {
      dispathCart({type:"REMOVE", id:id})
    }
    const cartContext = {
        items: casrtState.items,
        total: casrtState.total,
        addItem: addtoCartHandler,
        removeItem: removetoCartHandler,

    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
