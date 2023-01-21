import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    getCartItems: (state, action) => {
      state.cart = action.payload
    },
  },
}); 

// Action creators are generated for each case reducer function
export const { getCartItems } = cartSlice.actions

export default cartSlice.reducer

//Thunks

export const fetchCartItems=(payload)=>{
    return async function fetchCartItems(dispatch,getState){
      let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/getCartProducts',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        console.log(data.response)
        if(data.status===200){
           dispatch( getCartItems(data.response))
        }
    }
} 

export const deleteCartProducts=(dlt_payload)=>{
  return async function deleteCartProducts(dispatch,getState){
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: dlt_payload,
        url: 'http://localhost:3000/api/deleteCartProduct',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        console.log(data.response)
        if(data.status===200){
           window.location.reload()
        }
  }
}