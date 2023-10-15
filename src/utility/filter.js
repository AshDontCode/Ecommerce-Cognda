export const filterProducts = (filters, initProducts)=>{
    var newProducts = initProducts;
    if(filters.includes('men')){
        newProducts = initProducts.filter((item)=>{
            return item.category==="men's clothing";
        });
    }
    if(filters.includes('women')){
        newProducts = newProducts.filter((item)=>{
            return item.category === "women's clothing";
        })
    }
    if(filters.includes('four+')){
        newProducts = newProducts.filter((item)=>{
            return item.rating.rate > 4;
        })
    }
    return newProducts;
}