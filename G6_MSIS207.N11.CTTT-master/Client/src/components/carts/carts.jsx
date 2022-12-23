import React from 'react'
import "./carts.css"
import Header from "../header/Header"
import Announcement from '../Assest/Announcement'
import { useCart } from 'react-use-cart'

const Carts = () => {
    const {	
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart 
    } = useCart();

    if (isEmpty) 
    return(
        <>
        <Announcement/>
        <Header/>
        <h5 className="text-center" >Cart is Empty </h5>
        </>
    )

  return (
    <>
        <Announcement/>
        <Header/>
        <section className="py-4 container">
            <div className="row justify-content-center">
            <div className="col-12">
            <p><span>INFORMATION YOUR ITEMS IN CART</span></p>
            <h3 className="title-total-items"> Total Items: {totalItems} </h3>
            <br></br>
            <table className="table table-light- table-hover m-0">
                <tbody>
                <tr>
                    <td className="product-col" style={{padding: "2px 100px 20px 190px", fontSize: "25px"}}>
                    <b>Product</b>
                    </td>
                    <td className="name-col" style={{padding: "2px 100px 20px 210px", fontSize: "25px"}}>
                    <b>Name</b>
                    </td>
                    <td className="price-col" style={{ padding: "5px 50px 7px 90px", fontSize: "25px"}}>
                    <b>Price</b>
                    </td>
                    <td className="quantity-col" style={{padding: "5px 50px 7px 190px", fontSize: "25px"}}>
                    <b>Quantity</b>
                    </td>
                </tr>
                {items.map((item,index) =>{
                    return (
                    <tr key={index}>
                        <td>
                            <img src={item.image} className="im1" alt=""></img>
                        </td>
                        <td className="content" style={{padding: "0px 0px 45px 42px", fontSize: "25px", lineHeight: "1.5", textAlign: "left"}}>{item.name}</td>
                        <td className="content" style={{padding: "0px 0px 45px 73px", fontSize: "25px", lineHeight: "1.5", textAlign: "left"}}>{item.price}</td>
                        <td className="content" style={{padding: "0px 0px 45px 245px", fontSize: "25px", lineHeight: "1.5", textAlign: "left"}}>{item.quantity}</td>
                        <td className="">
                            <button style={{border:"5px solid pink", padding: "1px 12px 1px 15px"}} className="btn-subtract btn btn-light ms-2" 
                                    onClick={() => updateItemQuantity(item.id, item.quantity-1)}>
                            - 
                            </button>
                            <button style={{border:"5px solid black", padding: "1px 12px 1px 15px", marginBottom: "15px"}} className="btn-add btn btn-light ms-2"
                                    onClick={() => updateItemQuantity(item.id, item.quantity+1)}>
                            +
                            </button>
                            <button style={{border:"5px solid #EB455F", marginLeft: "-17px", padding: "1px 12px 1px 15px", marginBottom: "15px" }} className="btn-remove btn btn-dark ms-2" onClick={() => removeItem(item.id)}>
                            Remove Item
                            </button>
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
            <hr/>
            <br/>
            <br/>
            <div className="col-auto ms-auto">
            <h3>
                Total Price: {cartTotal} VND
            </h3>
            </div>
             <div className="col-auto ms-auto">
                <h4>
                <button style={{border:"10px solid #4B56D2", marginLeft:"770px", fontSize: "25px", marginTop: "-10px", marginBottom: "19px" }} className="clear-btn btn btn-warning m-2" onClick={() => emptyCart()}>Clear Cart</button>
                </h4>
            </div> 
        </div>
        </section>
    </>
  )
}

export default Carts

