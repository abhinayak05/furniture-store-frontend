/* eslint-disable no-console */
import axios from 'axios'
import qs from 'qs'
const apiUrl = 'http://localhost:3000/api'
export const lib = {
  async request(urlMethods, props) {
    const ajaxProps = {
      method: urlMethods.method,
      data: qs.stringify(props),
      url: apiUrl + urlMethods.url,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }   
    
    // debugger
    try {
      const data = await axios(ajaxProps)
      // debugger
      // const data = response
      return data
    } catch (err) {
      debugger
      return err
    }
  },
  async authRequest(urlMethods, props) {
    const accToken = window.localStorage.getItem('accessToken')
    //  const accToken = getCookie('authToken')

    //const accToken = 'Bearer 9facb3c84342926100a48d5d723675448c6f7363';

    const ajaxProps = {
      method: urlMethods.method,
      data: qs.stringify(props),
      url: apiUrl + urlMethods.url,
      headers: {
        Authorization: `${accToken}`
      }
    }
    try {
      const response = await axios(ajaxProps)
      const data = response
      return data
    } catch (err) {
      return err
    }
  },
  async authUploadRequest(urlMethods, props) {
    const accToken = window.localStorage.getItem('accessToken')
    //  const accToken = getCookie('authToken')
    const ajaxProps = {
      method: urlMethods.method,
      data: props,
      body: props,
      url: apiUrl + urlMethods.url,
      headers: {
        Authorization: `${accToken}`
      }
    }
    try {
      const response = await axios(ajaxProps)
      const data = response
      return data
    } catch (err) {
      return err
    }
  },
  async uploadRequest(urlMethods, props) {
    //  const accToken = getCookie('authToken')
    const ajaxProps = {
      method: urlMethods.method,
      data: props,
      body: props,
      url: apiUrl + urlMethods.url
    }
    try {
      const response = await axios(ajaxProps)
      const data = response
      return data
    } catch (err) {
      return err
    }
  },
  async urlRequest(urlMethods, props) {
    const ajaxProps = {
      method: urlMethods.method,
      data: qs.stringify(props),
      url: urlMethods.core + urlMethods.url,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
    // eslint-disable-next-line no-debugger
    // debugger
    const data = await axios(ajaxProps)
    // eslint-disable-next-line no-debugger
    // debugger
    return data
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie(cname) {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

// eslint-disable-next-line no-unused-vars
function checkCookie() {
  let user = getCookie('username')
  if (user !== '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user != null) {
      setCookie('username', user, 365)
    }
  }
}
