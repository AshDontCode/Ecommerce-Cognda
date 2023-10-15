import { useEffect, useState } from 'react';
import React from 'react';

import {ProductCard} from './ProductCard';
import {Shimmer} from './Shimmer';
import {filterProducts} from '../utility/filter';

export const ProductFeed = (props)=>{
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
    
        if (filters.includes(value)) {
          setFilters(prevFilters => prevFilters.filter(filter => filter !== value));
        } else {
          setFilters(prevFilters => [...prevFilters, value]);
        }
        
    };

    const visibleProducts = filters.length===0?products:filteredProducts;

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

    useEffect(()=>{
        const updatedProducts = filterProducts(filters, products);
        setFilteredProducts(updatedProducts);
    },[filters,products])


    const cards = (products.length===0) ? <Shimmer/> : visibleProducts.map((product)=>{
        return <ProductCard product={product} key={product.id} addToCart={props.addToCart} showCart={props.showCart}></ProductCard>
    })

    return(
        <React.Fragment>
        <div className='d-flex filters'>
                        <input type='checkbox' value="men" checked={filters.includes('men')} onChange={handleCheckboxChange}/>Men's Clothing
                        <input type='checkbox' value="women" checked={filters.includes('women')} onChange={handleCheckboxChange}/>Women's Clothing
                        <input type='checkbox' value="four+" checked={filters.includes('four+')} onChange={handleCheckboxChange}/>4 star and above
            </div>
        <div className="d-flex flex-wrap m-3">
            {cards}
        </div>
        </React.Fragment>
    )
}