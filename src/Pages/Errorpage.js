import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
function Errorpage() {
  return (
    <div style={{textAlign:'center'}}>
      <FontAwesomeIcon style={{fontSize:'300px'}} icon={faTriangleExclamation} />
       <h1>Oopps!!!!</h1>
       <h4>This Page Is Not Avaiblable</h4>
    </div>


  )
}

export default Errorpage