import { getTotalQty } from "../utility/cart";

import './Header.css';

export const Header = (props)=>{
    return(
        <div className="card header d-flex flex-row justify-content-between mb-3 header">
            <div className="logo">
                <a href="/">
                    <img src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" width="80px" height="80px" alt="logo"></img>
                </a>
            </div>
            <div className="nav d-flex flex-row justify-content-around align-items-center">
                <li className="m-1">
                   <button className='nav-link'>Dashboard</button>
                </li>
                <li className="m-1">
                     <button className='nav-link'>History</button>
                </li>
                <li className="m-1">
                     <button className='nav-link'>Contact</button>
                </li>
                <li className="m-1">
                    <button className="btn cart" onClick={props.toggleCart}>
                    {props.cart.length!==0 && <span className="badge badge-light">{getTotalQty(props.cart)}</span>}  
                    <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart-link" width="30px" height="30px"></img>
                    </button>
                </li>
                <li className="m-1">
                    <button className="btn profile" onClick={props.toggleCart}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="cart-link" width="30px" height="30px"></img>
                    </button>
                </li>
            </div>
        </div>
    )
}