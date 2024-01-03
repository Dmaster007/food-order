import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [CartOpen , setCardOpen] = useState(false)
  const CardOpenHandler = ()=>{
    setCardOpen(true);
  }
  const CardCloseHandler = ()=>{
    setCardOpen(false);
  }
  return (
    <CartProvider>
      { CartOpen && <Cart  CardCloseHandler = {CardCloseHandler} />}
      <Header CardOpenHandler = {CardOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
