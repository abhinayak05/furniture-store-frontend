import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    value:0
  },
  reducers: {
    getCartItems: (state, action) => {
      state.cart = action.payload
    },
    setIncrement:(state,action)=>{
      state.value=action.payload
    },
    setDecrement:(state,action)=>{
      state.value=action.payload
    }
  },
}); 

// Action creators are generated for each case reducer function
export const { getCartItems,setIncrement,setDecrement } = cartSlice.actions

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

export const incrementAction=(payload)=>{debugger
  return async function incrementAction(dispatch,getState){
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;debugger
    const ajaxProps = {
      method: 'post',
      data: payload,
      url: 'http://localhost:3000/api/increaseCartProduct',
      headers: {
        Authorization: `${accessToken}`
      }
    }
      const {data}=await axios(ajaxProps);debugger
      console.log(data.response);debugger
      if(data.status===200){
        dispatch(setIncrement(data.response))
        window.location.reload();
      }
  }
} 

export const decrementAction=(payload)=>{
  return async function decrementAction(dispatch,getState){
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
    const ajaxProps = {
      method: 'post',
      data: payload,
      url: 'http://localhost:3000/api/decreaseCartProduct',
      headers: {
        Authorization: `${accessToken}`
      }
    }
      const {data}=await axios(ajaxProps);
      console.log(data.response)
      if(data.status===200){
        dispatch(setDecrement(data.response))
        window.location.reload();
      }
  }
}