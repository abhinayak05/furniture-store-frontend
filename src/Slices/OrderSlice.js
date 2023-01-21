

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) =>{
        state.orders = action.payload
    }
  },
}); 

// Action creators are generated for each case reducer function
export const { setOrders } =orderSlice.actions

export default orderSlice.reducer

//Thunks

export const fetchMyOrders=(payload)=>{
    return async function fetchMyOrders(dispatch,getState){
      let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/getOrdersByUser',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        if(data.status===200){
           dispatch( setOrders(data.response))
        }
    }
} 
