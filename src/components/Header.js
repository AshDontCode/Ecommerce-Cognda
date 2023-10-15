import { getTotalQty } from "../utility/cart";

import './Header.css';

export const Header = (props)=>{
    return(
        <div className="card header d-flex flex-row justify-content-between header">
            <div className="logo">
                <a href="/">
                    <img src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" width="80px" height="80px" alt="logo"></img>
                </a>
               <button className="search-btn"><i class="fa-solid fa-magnifying-glass" style={{color: "#000000", fontSize:"30px"}}></i></button>
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
                    {props.cart.length!==0 && <span className="badge badge-light text-danger">{getTotalQty(props.cart)}</span>}  
                    <i class="fa-solid fa-cart-shopping" style={{color: "#000000 ", fontSize:"30px"}}></i>
                    </button>
                </li>
                <li className="m-1">
                    <button className="btn profile">
                    <i class="fa-solid fa-user" style={{color: "#000000", fontSize:"30px"}}></i>
                    </button>
                </li>
            </div>
        </div>
    )
}