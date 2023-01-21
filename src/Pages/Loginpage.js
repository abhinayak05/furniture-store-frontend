import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Style.css'
import { saveLoginAction } from '../Slices/LoginSlice';


function Loginpage() {

    const loginUser=useSelector((state)=>state.login.login);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch=useDispatch()

    const submitLogin=()=>{
         let payload={
            email:email,
            password:password
         };
         var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(payload.email!='' && payload.password!=''){
            if(payload.email.match(mailformat)){
                dispatch(saveLoginAction(payload));
            }else{
                alert('Invalid Email Address')
            }
         }else{
            alert('Email and Password required')
         }
    }

    return (
        <div className='section '>
            <div className="container mt-lg-5 d-flex justify-content-center">
                <div className="formContainer d-flex justify-content-center mt-5  border border-white shadow p-3 mb-5 bg-white rounded">
                    <div className="form-signin">
                        <img className="mb-4" src="\assets\furniture-logo.jpg" alt="" width="300" height="300" />

                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input value={email} onChange={(evt)=>setEmail(evt.target.value)} type="email"className="form-control" placeholder="Email Address" required autoFocus/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" >Password</label>
                            <input value={password} onChange={(evt)=>setPassword(evt.target.value)} type="password"className="form-control" placeholder="Password" required />
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" onClick={()=>submitLogin()} type="submit">Sign in</button>
                        <p>Create New Account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage
