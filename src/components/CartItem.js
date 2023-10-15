import './CartItem.css';






export const CartItem = (props)=>{
    const trim = (str, len) => {
        return str.substring(0,len)+"...";
    }

    const {id, title,qty, image, price, rating, description} = props.product;

    const style={
        width: 'fit-content'
    };

    const removeItem = ()=>{
        props.removeFromCart(id);
    }
    const addItem = ()=>{
        props.addToCart(props.product);
    }

    return(
        <div className="card d-flex custom-card" style={{minWidth:"250px"}}>
            <img src={image} alt={title} width="200px" height="200px"style={{margin:"auto"}}></img>
            <h4 className='card-title'>{trim(title, 15)}</h4>
            <h6 className='card-disc'>{trim(description, 30)}</h6>
            <h5 className='card-price' >{"₹ "+price}</h5>
            <h6>{rating.rate}<i class="fa-solid fa-star" style={{color: "#ff9529", margin:"0px 5px"}}></i>{" ("+rating.count+")"}</h6>
            <div className="d-flex mt-2 btn-wrapper">
            <button className="me-2 custom-card-button add-btn" style={style} onClick={removeItem}>-</button>
            <h5>{qty}</h5>
            <button className="ms-2 custom-card-button rmv-btn" style={style} onClick={addItem} >+</button>
            </div>
            <button className='buy-btn'>Buy Now</button>
        </div>
    )
}