import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload
    },
    getProductById: (state, action) => {
      state.products = action.payload
    },
  },
}); 

// Action creators are generated for each case reducer function
export const { getProducts, getProductById } = productSlice.actions

export default productSlice.reducer

//Thunks

export const fetchProducts = () => {
  
  return async function fetchProducts(dispatch, getState) {
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: null,
        url: 'http://localhost:3000/api/getProducts',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
    console.log(data.response); 
    if (data.status === 200) {
      dispatch(getProducts(data.response)); 
    }
  }
}

export const fetchProductById = (payload) => {debugger
  return async function fetchProductById(dispatch, getState) {debugger
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;debugger
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/getProductsById',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);debugger
    console.log(data.response)
    if (data.status === 200) {
      dispatch(getProductById(data.response));debugger
    }
  }
}

export const addProductToCart = (payloadCart) => {
  return async function addProductToCart(dispatch, getState) {
    let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payloadCart,
        url: 'http://localhost:3000/api/saveCartProducts',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
    console.log(data.response)
    if (data.status === 200) {
      alert('Products Added to cart')
    }
  }
}