import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lib } from '../httpClient'
import jwt_decode from 'jwt-decode'
export const loginslice = createSlice({
  name: 'login',
  initialState: {
    login: [],
  },
  reducers: {
    setLogin: (state, action) => {
      state.login.push(action.payload);
      console.log("access-token=" + action.payload.accessToken);
      let accessToken=localStorage.setItem("accessToken", JSON.stringify(action.payload));
      console.log(accessToken)
      let userPayload=jwt_decode(localStorage.getItem('accessToken'));
      localStorage.setItem('user',JSON.stringify(userPayload))

    },
    setUser:(state,action)=>{
      state.login.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin } = loginslice.actions

export default loginslice.reducer


//Thunks

export const saveLoginAction = (payload) => {
  return async function saveLoginAction(dispatch, getState) {
    //  const methodUrl='http://localhost:3000/api/userLogin';
    //  const {data}=await axios.post(methodUrl,payload)
    const methodUrl = { method: 'POST', url: '/userLogin' };
    const { data } = await lib.request(methodUrl, payload)
    console.log({ data })
    if (data.status === 403) {
        alert('Invalid Credentials')
    } else {
      if (data.user_type === 'customer') {
        window.location.href = '/home'
      } else {
        alert('Page Not Available!!!')
      }
      dispatch(setLogin(data))
    }
  }
}


export const saveUserRegistration=(payload)=>{
  return async function saveUserRegistration(dispatch,getState){
    const methodUrl={method:'POST',url:'/saveuser'}
    const {data}=await lib.request(methodUrl,payload)
    console.log({data})
    if(data.status===500){
      if(!alert(data.error)){
        alert('Registrartion Failed')
      }
    }else{
      alert('User Registration Successfull')
          window.location.href='/login'
    }
  }
}