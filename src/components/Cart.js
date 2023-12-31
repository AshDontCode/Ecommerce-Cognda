import {CartItem} from './CartItem';
import React from 'react';
import {getTotalPrice, getTotalQty} from '../utility/cart';
import './Cart.css'
export const Cart = (props)=>{

    

    const cartUi = props.cart.length===0?
                                         <h6 className='cart-empty'>Cart Empty</h6> :
                                         <React.Fragment>
                                            <div className='cart-view'>
                                            <h4 className='cart-heading'>Cart</h4>
                                            <div className='cart-info'>
                                            <p >{"Items: " + getTotalQty(props.cart)}</p>
                                            <p>{"Total cost: " + getTotalPrice(props.cart)}</p>
                                            </div>
                                         
                                         {
                                            props.cart.map(
                                                (item)=>{
                                                    return (                                                    
                                                        <CartItem key={item.id} product={item} removeFromCart={props.removeFromCart} addToCart={props.addToCart}>
                                                        </CartItem>
                                                    )
                                            })
                                        }
                                        </div>
                                        </React.Fragment>

    return (
        <div className='item-bg' style={{minWidth:"350px", maxHeight:"650px", overflow:"scroll",backgroundColor:"white", textAlign:"center", padding:"10px"}}>
            {cartUi}
        </div>
    )
}