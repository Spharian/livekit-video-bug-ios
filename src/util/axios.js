import Axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { BACKEND_URL } from '@env'

import echo from '@/util/echo'
import { AUTH_TOKEN_NAME } from '@/constants'

const axios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

axios.interceptors.request.use(async config => {
  config.headers['X-Socket-Id'] = echo.socketId()

  const userToken = await SecureStore.getItemAsync(AUTH_TOKEN_NAME)
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`
  }
  return config
})

export default axios
