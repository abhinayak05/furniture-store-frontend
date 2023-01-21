import React, { useState, useEffect } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NavFooter from '../Components/NavFooter'
import Headers from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { fetchMyOrders } from '../Slices/OrderSlice'
import Footer from '../Components/Footer'

function MyOrders() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
    }
    const items = JSON.parse(accessToken)
    var userID = items.user_id;
    let userInfo = localStorage.getItem('user');
    userInfo = JSON.parse(userInfo);

    const orders = useSelector((state) => state.order.orders);
    console.log(orders)
    
    const dispatch=useDispatch()
    
    let payload={
        user_id:userID
    }
    useEffect(()=>{
        dispatch(fetchMyOrders(payload))
    },[])

    return (
        <>
            <div class="container">
                <h3 style={{marginTop:'20px'}}>My Orders</h3>
                <div class="d-flex flex-column align-items-center">
                    {

                        orders.length > 0 ? (
                            orders.map((item) =>

                                <div key={item.id} class="col-md-4">
                                    <div class="card mb-4 box-shadow">
                                        <img className="card-img-top" height="210" src={"http://localhost:3000/assets/" + item.image_url} alt="Card image cap" />
                                        <div class="card-body">
                                            <h3>{item.product_name}</h3>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="d-flex">
                                                    <p class="mt-3">Qty:{item.quantity}</p>
                                                </div>
                                                <div className='d-flex flex-column align-items-center'>
                                                    <h6 class="color-primary">Price:</h6>
                                                    <h6>₹{item.total_price + 40}</h6>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <p>Order Status:</p>
                                                    <p style={{ background: '#0cd40c', color: 'black', padding: '0px 5px 0px 5px', marginLeft: '10px' }}>{item.delivery_status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        ) : (
                            <div style={{
                                marginRight: '400px',
                                marginTop: '200px'
                            }}>
                                <div className='d-flex flex-column align-content-center '>
                                    <h2 className=''>No Orders Here</h2>
                                    <Link to='/home'><button className='btn btn-danger'>GO TO HOME</button></Link>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <Footer/>
            <NavFooter />
        </>
    )
}

export default MyOrders
