import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NavFooter from '../Components/NavFooter'
import '../css/Style.css'
import { requestProductAction } from '../Slices/RequestSlice';
function Request() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/login';
    }
    const items = JSON.parse(accessToken)
    var userID = items.user_id;
    
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [desc, setDesc] = useState('');


    const requestProduct = useSelector((state) => state.request.request);

    const dispatch = useDispatch();

    const submitRequest = () => {
        let data = {
            user_id:userID,
            title: title,
            email: email,
            phone: phoneNo,
            description: desc
        };
        console.log(data)
        var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var phoneno = /^\d{10}$/;
        if (data.title != '' && data.email != '' && data.phone != '' && data.description != '') {
            if (data.email.match(mailformat)) {
                if (data.phone.match(phoneno)) {
                    dispatch(requestProductAction(data));
                } else {
                    alert('enter valid phone number')
                }
            } else {
                alert('Enter Valid Email Address')
            }
        } else {
            alert('Please Fill the Fields')
        }
    };

    return (
        <div><nav class="navbar navbar-expand-md fixed-top">
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarsExampleDefault">
                Contact Us
            </div>
        </nav>
            <div className="container mt-lg-5 d-flex justify-content-center album">
                <div className="formContainer d-flex justify-content-center mt-5  border border-white shadow p-3 mb-5 bg-white rounded">
                    <div className="form">
                        <div className='border border-grey shadow p-3 mb-5 bg-white rounded'>
                            <h1>Product Request</h1>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Title</label>
                            <input type="text" id="title" value={title} onChange={(evt) => setTitle(evt.target.value)} className="form-control" placeholder='Title' required autoFocus />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" >Phone</label>
                            <input type="text" id="phNo" value={phoneNo} onChange={(evt) => setPhoneNo(evt.target.value)} className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Requirement</label>
                            <textarea type="text" id="desc" value={desc} onChange={(evt) => setDesc(evt.target.value)} className="form-control" placeholder="Product Requirement" required />
                        </div>

                        <button className="btn btn-lg btn-danger btn-block" onClick={() => submitRequest()} type="submit">Submit</button>



                    </div>
                </div>
            </div>
            <NavFooter />
        </div>
    )
}

export default Request
