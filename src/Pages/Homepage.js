import React, { useEffect, useState } from 'react'
import '../css/Style.css'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart, fetchProducts } from '../Slices/ProductSlice'
import Header from '../Components/Header'
import NavFooter from '../Components/NavFooter'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'


export function Homepage() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
    }
    const items = JSON.parse(accessToken)
    var userID = items.id;



    const products = useSelector((state) => state.product.products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    console.log(products);

    const addToCart = (item) => {
        console.log(item)
        let payloadCart = {
            user_id: userID,
            productId: item.id,
            product_name: item.product_name,
            quantity: '1',
            price: item.product_price
        }
        console.log(payloadCart)
        dispatch(addProductToCart(payloadCart))
    }
    return (
        <div>
            <Header />
            <div>
                <div class="container">
                    <h1 class="mt-5">Shop,The Best Quality Furniture Products</h1>
                    <p class="lead">Explore Home Decor Accessories</p>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            products.map((item) => <div key={item.id} className="col-md-4">

                                <div className="card mb-4 box-shadow">
                                    <div className="card-body">
                                        <Link style={{ textDecoration: 'none' }} to='/productdetails' state={item}>
                                            <img className="card-img-top" height="210" src={"http://localhost:3000/assets/" + item.image_url} alt="Card image cap" />

                                            <h5>{item.product_name}</h5>
                                            {/* <p className="card-text">{item.product_description}</p> */}
                                            <div className="d-flex justify-content-center justify-content-between">
                                                {/* <div className='d-flex justify-content-center'>
                                                <h6 className="color-primary">Quantity:</h6>
                                                <button style={{ display: 'flex', alignItems: 'center', height: '25px', width: '25px' }}>+</button>
                                                <p>0</p>
                                                <button style={{ display: 'flex', alignItems: 'center', height: '25px', width: '25px' }}>-</button>
                                            </div> */}
                                                <h6 className="color-primary">Price:{item.product_price}/-</h6>

                                            </div>
                                        </Link>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success" data-toggle="modal"
                                                data-target="#productModal" onClick={() => addToCart(item)}>Cart</button>
                                            <button type="button" className="btn btn-sm btn-danger">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
            <NavFooter />
            
        </div>
    )
}
