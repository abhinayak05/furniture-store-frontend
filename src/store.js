import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Slices/LoginSlice'
import productsReducer from './Slices/ProductSlice'
import cartReducer from './Slices/CartSlice'
import placeOrderReducer from './Slices/PlaceorderSlice'
import ordersReducer from './Slices/OrderSlice'
import requestReducer from './Slices/RequestSlice'
import counterReducer from './Slices/counterSlice'

export default configureStore({
  reducer: {
    login:loginReducer,
    product:productsReducer,
    cart:cartReducer,
    placeorder:placeOrderReducer,
    order:ordersReducer,
    request:requestReducer,
    counter:counterReducer,
  },
})