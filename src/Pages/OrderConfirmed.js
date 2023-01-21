import '../css/Style.css'
import { useNavigate } from 'react-router-dom'

export function OrderConfirmed(){
    const navigate = useNavigate();
    return(
        <div>
            <div className='orderConfirm'>
                <img src="\assets\order-confirmed.png"/>
            </div>
            <div>
            <button onClick={()=>{navigate("/home",{})}} type="submit" className="homeBtn">Go to home &#8594;</button>
            </div>
        </div>
    )
}