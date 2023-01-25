import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../Components/Header'
import NavFooter from '../Components/NavFooter'
import { deleteCartProducts, fetchCartItems, incrementAction } from '../Slices/CartSlice';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { decrementAction } from '../Slices/counterSlice';


function Cart() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
    }
    const items = JSON.parse(accessToken)
    var userID = items.user_id;


    const cartProducts = useSelector((state) => state.cart.cart);
    console.log(cartProducts)
    // const counter=useSelector((state)=>state.counter.value)
    const [counter, setCounter] = useState('');
    

    if (cartProducts.length === 0) {
        var total_price = 0, shippingPrice = 0;
    } else {
        var totalPrice = 0, shippingPrice = 40;
        for (let i = 0; i < cartProducts.length; i++) {
            totalPrice += cartProducts[i].product_price * cartProducts[i].cart_quantity  + shippingPrice;
        }
    }


    let payload = {
        user_id: userID
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCartItems(payload))
    }, [])

    const removeCartItem = (item) => {
        let dltItem = {
            user_id: userID,
            productId: item.product_id
        }
        dispatch(deleteCartProducts(dltItem))
    }

    const orderItem = (item) => {
        if (cartProducts.length > 0) {
            window.location.href = '/checkout'
        } else {
            alert('Cart is Empty')
        }
    }
    const incrementBtn=(item)=>{debugger
        setCounter(counter+1);debugger
        let increaseItem={
            userId:userID,
            productId: item.product_id,
            quantity:item.quantity
        }
        dispatch(incrementAction(increaseItem));debugger
    }
    const decrementBtn=(item)=>{
        setCounter(counter-1)
        let decreseItem={
            userId:userID,
            productId: item.product_id,
            quantity:item.cart_quantity
        }
        dispatch(decrementAction(decreseItem))
    }
    return (
        <div>
            <Header />
            <div class="container">
                <div class="py-5">
                    <div class="container">
                        <div class="row">
                            {
                                cartProducts.length > 0 ? (
                                    cartProducts.map((item) =>
                                            
                                        <div key={item.id} class="col-md-4">
                                            <div class="card mb-4 box-shadow">
                                                <Link style={{ textDecoration: 'none' }} to='/productdetails' state={item.id}>
                                                    <img className="card-img-top" height="210" src={"http://localhost:3000/assets/" + item.image_url} alt="Card image cap" />
                                                </Link>

                                                <div class="card-body">
                                                    <h3>{item.product_name}</h3>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center">
                                                            <button
                                                                aria-label="Increment value"
                                                                style={{ height: "fit-content" }}
                                                            onClick={() => incrementBtn(item)}
                                                            >+</button>
                                                            <p class="mt-3 ml-1 mr-1" value={counter} onChange={(evt)=>setCounter(evt.target.value)}>{item.quantity}</p>
                                                            <button
                                                                style={{ height: "fit-content" }}
                                                                aria-label="Decrement value"
                                                            onClick={() =>decrementBtn(item)}
                                                            >-</button>

                                                        </div>
                                                        <div className='d-flex flex-column align-items-center'>
                                                            <h6 class="color-primary">Price:</h6>
                                                            <h6>₹{item.product_price}</h6>
                                                            <h6 class="color-primary">Qty:</h6>
                                                            <h6>{item.cart_quantity}</h6>
                                                            <h6 class="color-primary ">Delivery Charges:</h6>
                                                            <h6>₹{shippingPrice}</h6>
                                                            <h6 class="color-primary">Total Price:</h6>
                                                            <h6>₹{item.product_price * item.cart_quantity + shippingPrice}</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-danger btn-lg btn-block mt-2" onClick={() => removeCartItem(item)}>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                ) : (
                                    <div className='col-6 album'>
                                        <div>
                                            <div className='d-flex flex-column align-content-center'>
                                                <div>Your Cart is Empty</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='d-flex flex-column '>
                        <h6 class="color-primary">Total Amount:</h6>
                        <h6>₹{totalPrice}</h6>
                        <button type="button" class="btn btn-primary btn-sm btn-block" onClick={() => orderItem()}>Place Order &#8594;</button>
                    </div>
                </div>
            </div>
            <Footer />
            <NavFooter />
        </div>
    )
}

export default Cart
