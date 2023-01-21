import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Dashboard from './Pages/Dashboard';
import Errorpage from './Pages/Errorpage';
import {Homepage} from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import MyAccount from './Pages/MyAccount';
import MyOrders from './Pages/MyOrders';
import { OrderConfirmed } from './Pages/OrderConfirmed';
import {ProductInfo} from './Pages/ProductInfo';
import Registerpage from './Pages/Registerpage';
import Request from './Pages/Request';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/register' element={<Registerpage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/productdetails' element={<ProductInfo/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/orderconfirmed' element={<OrderConfirmed/>}/>
          <Route path='/myaccount' element={<MyAccount/>}/>
          <Route path='/request' element={<Request/>}/>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
