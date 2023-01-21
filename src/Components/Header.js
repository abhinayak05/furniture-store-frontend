import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </div>
      </nav><br></br>
    </div>
  )
}

export default Header
