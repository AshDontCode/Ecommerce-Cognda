import React from 'react';

import {ProductFeed} from './ProductFeed';
import {Cart} from './Cart';
import { Slider } from './Slider';
import './Body.css';

export const Body = (props)=>{
    // const width = props.cartVisible? 'w-75':'w-100';
    const body = <div className='d-flex flex-column ' style={{width:"80%", margin:"auto"} }>

                    <Slider/>

                    <div className='d-flex'>
                    <div className="w-100">
                    <ProductFeed addToCart={props.addToCart} showCart = {props.showCart}/>
                    </div>
                    {props.cartVisible &&
                    <div className='w-25 cart-scroll'  style={{position:"fixed", right:"0px", top:"60px", maxHeight:"700px", overflow:"scroll", zIndex: "100"}}>
                        <Cart cart={props.cart} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />
                    </div>
                    }
                    </div>
                </div>
    
    return(
        <div className='d-flex'>
            {body}
        </div>
    )
}