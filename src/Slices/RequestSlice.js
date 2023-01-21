

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'

export const requestSlice = createSlice({
  name: 'request',
  initialState: {
    request: [],
  },
  reducers: {
    setRequest: (state, action) =>{
        state.request.push(action.payload)
    }
  },
}); 

// Action creators are generated for each case reducer function
export const { setRequest } =requestSlice.actions

export default requestSlice.reducer

//Thunks

export const requestProductAction=(payload)=>{
    return async function requestProductAction(dispatch,getState){
      let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/product/request',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        if(data.status===200){
           dispatch( setRequest(data.response));
           alert('Request has been sent')
        }
    }
} 
