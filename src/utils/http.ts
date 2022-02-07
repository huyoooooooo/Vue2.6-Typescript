import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// Request Interceptors
service.interceptors.request.use(
  config => {
    // console.log('请求拦截器...')
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response Interceptors
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    
  }
)

export default service