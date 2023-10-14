import { useEffect, useState } from 'react';
import {ProductCard} from './ProductCard';

export const ProductFeed = ()=>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            setProducts(json)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const cards = products.map((product)=>{
        return <ProductCard product={product} key={product.id}></ProductCard>
    })

    return(
        <div className="d-flex flex-wrap ">
            {cards}
        </div>
    )
}