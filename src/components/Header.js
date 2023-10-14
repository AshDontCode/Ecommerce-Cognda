export const Header = ()=>{
    return(
        <div className="header d-flex flex-row justify-content-between">
            <div className="logo">
                <a href="/">
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" width="80px" height="50px" alt="logo"></img>
                </a>
            </div>
            <div className="nav d-flex flex-row justify-content-around align-items-center">
                <li className="m-1">
                    <a href="">Dashboard</a>
                </li>
                <li className="m-1">
                    <a href="">About Us</a>
                </li>
                <li className="m-1">
                    <a href="">Contact Us</a>
                </li>
                <li className="m-1">
                    <a href="">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-442-1151214.png?f=webp" alt="cart-link" width="80px" height="50px"></img>
                    </a>
                </li>
            </div>
        </div>
    )
}