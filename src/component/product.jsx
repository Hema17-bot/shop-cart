import React from "react";
import './products.css';

const Products=({product ,cart,setCart})=>{
    const name=product.name.length>20 ? product.name.substring(0,20)+'...':product.name;
    const addcart=()=>{
        setCart([...cart,product])
    };
    const removecart=()=>{
        setCart(cart.filter((c)=>c.id !== product.id))
    };
    return(
        <div className="product-card">
            <div className="img">
            <img src={product.pic} alt=""/>
            </div>
            <div className="product-info">
            
                <h3>{name}</h3>
                <h4>price: {product.amt}</h4>
                {cart.includes(product) ? (<button onClick={removecart} className="btnremove">Remove</button>
                ) : (
                    <button onClick={addcart} className="btnadd">Add to Cart</button>
                )}
            </div>
        </div>
            )
            }
            
            export default Products;

            