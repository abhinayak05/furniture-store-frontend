import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    setIncrement: (state) => {
      state.value += 1
    },
    setDecrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIncrement, setDecrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


export const incrementAction=(payload)=>{
    return async function incrementAction(dispatch,getState){
      let accessToken = JSON.parse(localStorage.getItem('accessToken')).response;
      const ajaxProps = {
        method: 'post',
        data: payload,
        url: 'http://localhost:3000/api/increaseCartProduct',
        headers: {
          Authorization: `${accessToken}`
        }
      }
        const {data}=await axios(ajaxProps);
        console.log(data.response)
        if(data.status===200){
           dispatch( setIncrement(data.response))
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
           dispatch( setDecrement(data.response))
           window.location.reload();
        }
    }
}