import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="row d-flex justify-content-between">
        <div className="footer-col-3">
            <h3>Best Quality Furnitures</h3>
            <ul>
            <li>Sofa Sets</li>
            <li>Chairs</li>
            <li>Tables</li>
            <li>Wardrobes</li>
            <li>Tv Units</li>
            </ul>
        </div>
        <div className="footer-col-4">
            <h3>Contact us</h3>
            <ul>
            <li>Email: furniturestore@gmail.com</li>
            <li>Contact: +918310571419</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className="copyright"><FontAwesomeIcon icon={faCopyright}/> 2023 - Almon Technologies</p>
    </div>
    </div>
  )
}

export default Footer