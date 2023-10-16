import React from 'react';
import {ProductFeed} from './ProductFeed';
import {Cart} from './Cart';
import { Slider } from './Slider';
import {Hero} from './Hero';
import './Body.css';


export const Body = (props)=>{
    
    // const width = props.cartVisible? 'w-75':'w-100';
    const body = <div className='d-flex flex-column ' style={{width:"100%"} }>

                    <Slider/>
                    <Hero/>
                    
                    <div className="d-flex">
                    <div className="w-80 feed">
                    <ProductFeed addToCart={props.addToCart} showCart = {props.showCart}/>
                    </div>
                    {props.cartVisible &&
                    <div className="cart-scroll" style={{ position:"fixed",
                    right:"0px", top:"100px",bottom:"20px", 
                    minWidth:"370px", overflow:"scroll",
                    zIndex: "100"}}>
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