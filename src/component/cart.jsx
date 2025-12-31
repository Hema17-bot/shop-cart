import React, { useEffect, useState } from "react";
import './cart.css';

const Cart = ({cart,setCart}) => {
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,cur)=>acc+parseInt(cur.amt,0),0));
    },[cart]);
    return (
        <>
        <h1 className="cartheading">cart product</h1>
        <div className="cart-container">
            {cart.map((product) => (
                <div className="cartproduct" key={product.id}>
                    <div className="img">
                        <img src={product.pic} alt={product.name} />
                    </div>
                    <div className="cart-product-details">
                        <h3>{product.name}</h3>
                        <h4>Price: {product.amt}</h4>
                    </div>
                </div>
            ))}
        </div>
        <h2 className="cartamt">Total Amount: {total} </h2>
        </>
    );
};
export default Cart;