import { useState } from 'react';

import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Body} from './components/Body'

import { getTotalQty } from './utility/cart';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([])

  const addToCart = (item)=>{
    setCart((prevCart) => {
      const newCart = JSON.parse(JSON.stringify(prevCart)); //spread operator was not working here
      const index = newCart.findIndex(el => el.id===item.id);
      if(index!==-1){
        newCart[index].qty += 1;
      }else{
        const newItem = {...item, qty:1}
        newCart.push(newItem);
      }
      return newCart;
    });
  }

  const removeFromCart = (id)=>{
    setCart((prevCart)=>{
      if(getTotalQty(prevCart)===1 && cartVisible)
      toggleCart();
      const cart = JSON.parse(JSON.stringify(prevCart)); //spread operator was not working here
      const item = cart.find((el)=>el.id===id);
      const newCart = cart.filter((el)=>el.id!==id);
      item.qty = item.qty-1;
      if(item.qty>0)
        newCart.push(item);
      return newCart;
    })
  }

  const showCart = ()=>{
    setCartVisible(true);
  }
  const toggleCart = ()=>{
    setCartVisible(prevCartVisible=>!prevCartVisible);
  }

  return (
    <div className="App">
        <Header cart={cart} cartVisible={cartVisible} toggleCart={toggleCart}></Header>
        <Body cart={cart} cartVisible={cartVisible} showCart={showCart} addToCart={addToCart} removeFromCart={removeFromCart}></Body>
        <Footer/>
    </div>
  );
}

export default App;
