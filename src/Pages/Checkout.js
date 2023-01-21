import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NavFooter from '../Components/NavFooter'
import { placeOrderProduct } from '../Slices/PlaceorderSlice';


function Checkout() {

    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/login';
    }
    const items = JSON.parse(accessToken)
    var userID = items.user_id;
    

    const placeOrder = useSelector((state) => state.placeorder.placeorder);

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState("")
    const [mobileno, setMobileNo] = useState("")
    const [pincode, setPincode] = useState("")
    const [address, setAddress] = useState("")
    const [addresstwo, setAddresstwo] = useState("")

    const dispatch = useDispatch();


    const submitData = () => {
        let orderedDetails = {
            userId: userID,
            fullname: fullname,
            email: email,
            phone: mobileno,
            pincode: pincode,
            address1: address,
            address2: addresstwo,
            
            
        }
        console.log(orderedDetails)
        if (orderedDetails.fullname != "" && orderedDetails.email != "" && orderedDetails.phone != "" && orderedDetails.pincode != "" && orderedDetails.address1 != "" && orderedDetails.address2 != "") {
            var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var phoneno = /^\d{10}$/;
            var pin = /^\d{6}$/;
            if (orderedDetails.phone.match(phoneno)) {
                if (orderedDetails.pincode.match(pin)) {
                    if (orderedDetails.email.match(mailformat)) {
                          dispatch(placeOrderProduct(orderedDetails))
                    } else {
                        alert("You have entered an invalid email address!")
                    }
                }
                else {
                    alert("Pin code should be 6 digits !")
                }
            }
            else {
                alert("You have entered an invalid mobile no!")
            }
        }
        else {
            alert("Please fill all the Fields")
        }

    }

    return (
        <div>
            <nav class="navbar navbar-expand-md fixed-top">
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarsExampleDefault">
                    Contact Us
                </div>
            </nav><br></br>
            <div class="album">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 order-md-1">
                            <h4 class="mb-3">Billing address</h4>
                            <div class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label htmlFor="firstName">Full Name</label>
                                        <input type="text" class="form-control" value={fullname} onChange={(evt) => setFullname(evt.target.value)} id="firstName" placeholder="Your Fullname" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" class="form-control" value={email} onChange={(evt) => setEmail(evt.target.value)} id="email" placeholder="you@example.com" />
                                    <div class="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="email">Phone Number</label>
                                    <input type="text" class="form-control" value={mobileno} onChange={(evt) => setMobileNo(evt.target.value)} id="phoneNo" placeholder="Your 10 Digit Phone Number" />
                                </div>
                                <div class="mb-3">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" value={address} onChange={(evt) => setAddress(evt.target.value)} id="address" placeholder="1234 Main St" required />
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                                    <input type="text" class="form-control" value={addresstwo} onChange={(evt) => setAddresstwo(evt.target.value)} id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label htmlFor="zip">Pincode</label>
                                        <input type="text" class="form-control" value={pincode} onChange={(evt) => setPincode(evt.target.value)} id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <label for="note">Note: Currenty We are Provinding Cash On Delivery</label>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" onClick={() => submitData()} type="submit">Place Order</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavFooter />
        </div>
    )
}

export default Checkout
