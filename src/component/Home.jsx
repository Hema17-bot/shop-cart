import React, { useState } from "react";
import data from './products.json';
import Products from './product';
import './home.css';

const Home = ({cart,setCart}) => {
    console.log(data);
    const [products]=useState(data)
    return (
        <div className="product-container">
            {products.map((product)=>(
                <Products key={product.id} product={product} cart={cart} setCart={setCart} />
            ))}
       
        </div>
    );
};

export default Home;