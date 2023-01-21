import React from 'react'
import NavFooter from '../Components/NavFooter'
import $ from 'jquery'
import Footer from '../Components/Footer';

function MyAccount() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
    }
    const items = JSON.parse(accessToken)
    var userID = items.user_id;
    
    //Logged Username 
    let userInfo = localStorage.getItem('user');
    userInfo = JSON.parse(userInfo);
    // $('#username').html(userInfo.full_name)
    // $('#emailid').html(userInfo.email)

    const logOut=()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user')
        window.location.href='/login'
    }
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarsExampleDefault">
            Contact Us
        </div>
    </nav>

    <div className="container">
    <div className=" py-5">
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-md-4">
                        <div className="d-flex justify-content-between align-content-center">
                            <div style={{padding: '20px 10px 20px 10px'}}>
                                <img style={{height: '30px',width:'30px',borderRadius:'50%'}} src="\assets\user.png" alt=""/>
                            </div>
                            <div className="d-flex align-content-center">
                                <div>
                                    <h3><span>{userInfo.full_name}</span></h3>
                                    <p><span>{userInfo.email}</span></p>
                                </div>
                                <button className="btn" style={{color:'blue'}}>More..</button>
                            </div>
                        </div><br/>
                        <div className="d-flex justify-content-center align-content-center">
                            <button className="btn btn-warning" onClick={()=>logOut()}>Logout</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    <NavFooter/>
    </div>
  )
}

export default MyAccount
