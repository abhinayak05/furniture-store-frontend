import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import '../css/NavFooter.css'
function NavFooter() {
    let userInfo = localStorage.getItem('user');
    userInfo = JSON.parse(userInfo);
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark navFooter">
        <div>
            <Link className="navbar-brand" to="#">Furniture-STORE</Link>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarCollapse">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/request">Request</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/myorders">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
            </ul>    
        </div>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link " to="/myaccount"><FontAwesomeIcon style={{ fontSize: '20px', marginRight: '5px' }} icon={faUser} /><span style={{color:'white'}}>{userInfo.full_name}</span></Link>
            </li>
        </div>
    </nav>
    </div>
  )
}

export default NavFooter
