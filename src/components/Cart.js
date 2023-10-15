import {CartItem} from './CartItem';
import React from 'react';
import {getTotalPrice, getTotalQty} from '../utility/cart';

export const Cart = (props)=>{

    

    const cartUi = props.cart.length===0?
                                         "Cart Empty" :
                                         <React.Fragment>
                                            <h4>{"Total items: " + getTotalQty(props.cart)}</h4>
                                            <h4>{"Total cost: " + getTotalPrice(props.cart)}</h4>
                                         
                                         {
                                            props.cart.map(
                                                (item)=>{
                                                    return (                                                    
                                                        <CartItem key={item.id} product={item} removeFromCart={props.removeFromCart} addToCart={props.addToCart}>
                                                        </CartItem>
                                                    )
                                            })
                                        }
                                        </React.Fragment>

    return (
        <div className='card m-3 bg-light ps-5 pe-5'>
            {cartUi}
        </div>
    )
}