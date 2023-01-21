

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const placeOrderSlice = createSlice({
  name: 'placeorder',
  initialState: {
    placeorder: [],
  },
  reducers: {
    setOrdersProducts: (state, action) =>{
        state.placeorder = action.payload
    }
  },
}); 

// Action creators are generated for each case reducer function
export const { setOrdersProducts } =placeOrderSlice.actions

export default placeOrderSlice.reducer

//Thunks

export const placeOrderProduct=(payload)=>{
    return async function placeOrderProduct(dispatch,getState){
      let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/saveOrders',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        if(data.status===200){
           dispatch( setOrdersProducts(data.response))
           window.location.href='/orderconfirmed'
        }
    }
} 
