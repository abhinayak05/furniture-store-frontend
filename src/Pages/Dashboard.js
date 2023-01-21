import React from 'react'
import { Link } from 'react-router-dom';


function Dashboard() {
  const myStyle = {
    width: '100%',
    height: '100vh',
    marginTop: '0px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-transparent d-flex justify-content-between">
        <div>
          <Link className="navbar-brand companyName" to="#">Furniture-STORE</Link>
        </div>
          <ul className="navbar-nav">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-dark"><Link className="nav-link" to="/login">Login</Link></button>
              <button type="button" class="btn btn-dark"><Link className="nav-link" to="/register">Register</Link></button>
            </div>

          </ul>
      </nav>
      <div style={myStyle}>
        <img style={{ width: '100%' }} src='\assets\furniture02.jpg' />
      </div>
    </div>
  )
}

export default Dashboard
