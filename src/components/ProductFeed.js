import { useEffect, useState } from 'react';
import React from 'react';

import {ProductCard} from './ProductCard';
import {Shimmer} from './Shimmer';
import {filterProducts} from '../utility/filter';
import './ProductFeed.css';

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
            <h3 className='filter-heading' style={{margin:"0"}}>Filter</h3>
        <div className='d-flex justify-content-center filters custom-filter'>
                        
                        <input className='checkBx' type='checkbox' value="men" checked={filters.includes('men')} onChange={handleCheckboxChange}/>Men's Clothing
                        <input className='checkBx'type='checkbox' value="women" checked={filters.includes('women')} onChange={handleCheckboxChange}/>Women's Clothing
                        <input className='checkBx' type='checkbox' value="four+" checked={filters.includes('four+')} onChange={handleCheckboxChange}/>4 star and above
            </div>
        <div className="d-flex flex-wrap justify-content-between" style={{width:"80%", margin:"auto"}}>
            {cards}
        </div>
        </React.Fragment>
    )
}