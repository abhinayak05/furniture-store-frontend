import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Style.css'
import { saveUserRegistration } from '../Slices/LoginSlice';

function Registerpage() {
    const loginData = useSelector((state) => state.login.login);
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const user_type = 'customer';

    const dispatch = useDispatch()

    const saveUserData = () => {
        let payload = {
            fullname: fullname,
            email: email,
            password: password,
            phone: phone,
            gender: gender,
            dob: dob,
            user_type: user_type
        }
        console.log(payload)
        var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var phoneno = /^\d{10}$/;

        if (payload.full_name != '' && payload.email != '' && payload.password != '' && payload.phone != '' && payload.gender != '' && payload.dob != '') {
            if (payload.email.match(mailformat)) {
                if (payload.phone.match(phoneno)) {
                    dispatch(saveUserRegistration(payload))
                } else {
                    alert('Invalid Mobile Number')
                }
            } else {
                alert('Invalid Email Address')
            }
        } else {
            alert('Please Fill All the Fields')
        }
    }

    return (
        <div className='section '>
            <div className="container mt-lg-5 d-flex justify-content-center">
                <div className=" d-flex justify-content-center mt-5  border border-white shadow p-3 mb-5 bg-white rounded">
                    <div className="col">
                        <div className="form-signin">
                            <div className="form-group">
                                <label htmlFor="name">Fullname</label>
                                <input value={fullname} onChange={(evt) => setFullname(evt.target.value)} type="text" id="fullname" className="form-control" placeholder="Your Fullname" required autoFocus />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" >Email</label>
                                <input value={email} onChange={(evt) => setEmail(evt.target.value)} type="email" id="email" className="form-control" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input value={password} onChange={(evt) => setPassword(evt.target.value)} type="password" id="password" className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber" >Phone</label>
                                <input value={phone} onChange={(evt) => setPhone(evt.target.value)} type="text" id="phNo" className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <input value={gender} onChange={(evt) => setGender(evt.target.value)} type="gender" id="gender" className="form-control" placeholder="Gender" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob" >Date Of Birth</label>
                                <input value={dob} onChange={(evt) => setDob(evt.target.value)} type="date" id="dob" className="form-control" placeholder="Date Of Birth" required />
                            </div>

                            <button className="btn btn-lg btn-primary btn-block" onClick={() => saveUserData()} type="submit">Sign in</button>
                            <p>Already Have a Account? <Link to="/login">LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registerpage
