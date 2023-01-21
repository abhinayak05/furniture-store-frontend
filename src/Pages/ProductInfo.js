import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchProductById, addProductToCart } from '../Slices/ProductSlice'
import Header from '../Components/Header'
import NavFooter from '../Components/NavFooter'


export function ProductInfo() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
    }
    const items = JSON.parse(accessToken)
    var userId = items.user_id;
    

    const [quantity, setQty] = useState('1')

    const location = useLocation()
    var id = location.state

    let payload = {
        id: id
    }
    const products = useSelector((state) => state.product.products)
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductById(payload))
    }, [])

    const addToCart = (item) => {
        console.log(item)
        let payloadCart = {
            user_id: userId,
            productId: item.id,
            product_name: item.product_name,
            quantity: quantity,
            price: item.product_price
        }
        console.log(payloadCart)
        dispatch(addProductToCart(payloadCart))
    }


    return (
        <div>
            <Header />
            <div class="container">
                <div class="album">
                    <div class="container">
                        <div class="d-flex justify-content-around">
                            <div class="col-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" width="100%" src={"http://localhost:3000/assets/" + products[0].image_url} alt="Card image cap" />
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h3>{products[0].product_name}</h3>
                                    <p class="card-text mt-2">{products[0].product_description}</p>
                                    <div class=" mt-2">
                                        <div className='productQty d-flex align-items-center'>
                                            <h6 className='mr-2'>Quantity:</h6><input value={quantity} onChange={(evt) => setQty(evt.target.value)} />
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <h6 class="color-primary">Price:</h6>
                                            <h6>₹{products[0].product_price}</h6>
                                        </div>
                                    </div>
                                    <div class="btn-group mt-5">
                                        <button type="button" class="btn btn-lg btn-outline-success" data-toggle="modal"
                                            data-target="#productModal" onClick={() => addToCart(products[0])}>Cart</button>
                                        <button type="button" class="btn btn-lg btn-danger">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavFooter />
        </div>
    )
}


