import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './cart.css'
import Header from "../header/Header"
import Announcement from '../Assest/Announcement'
import { useCart } from "react-use-cart";

const Cart = () => {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(res => {
      setProducts(res.products)
    })
  },[]) 

  
    
    return (
      <div>
      <Announcement/>
      <Header/>
        <div className='shopping-cart'>
          <p className='product-p-title'>GROUP6.FIG</p>
          <ul className='cart__list' >
           {
            products.map((product, index) => {
              if((page - 1) * 15 < index && index <= (page * 15)) return (
                <li className='cart__list-item'>
                <img src={product.image} alt="img product" className='cart__img' />
                    <div className='content'>
                      <p className='p-name'>
                        {product.name}
                      </p>
                      <p className='price'>Price: {product.price} VND</p>
                      <p className='quantity'>Quantity: {product.quantity}</p>
                        <div className='bt-product-page'>
                        <button className='add-tc' onClick={()=>{addItem(product)}}>Add to Cart</button>
                        <button className='det-tc'>More Detail</button>
                      </div>   
                </div>
             </li>
              )
            })
           }
          </ul>
            <div className='page-stt'>
              <button  onClick={()=> setPage(1)} className='num-page'>1</button>
              <button onClick={() => setPage(2)} className='num-page'>2</button>
              <button onClick={() => setPage(3)} className='num-page'>3</button>
              <button onClick={() => setPage(4)} className='num-page'>4</button>
 
            </div>
          </div> 
        </div>
    )
}

export default Cart