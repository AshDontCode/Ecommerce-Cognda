export const getTotalPrice = (cart)=>{
    return  cart.reduce((acc, item)=>{
                return acc + item.qty*item.price
            },0);
}
export const getTotalQty = (cart)=>{
    return cart.reduce((acc, item)=>{
        return acc + item.qty;
    },0)
}