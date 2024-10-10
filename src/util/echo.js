import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
// import { BACKEND_URL, PUSHER_APP_KEY, PUSHER_APP_CLUSTER } from '@env'
import { BACKEND_URL, PUSHER_APP_KEY, PUSHER_APP_CLUSTER, PUSHER_HOST, PUSHER_PORT } from '@env'

window.Pusher = Pusher

// const echo = new Echo({
//   broadcaster: 'pusher',
//   key: PUSHER_APP_KEY,
//   cluster: PUSHER_APP_CLUSTER,
//   forceTLS: true,
//   authEndpoint: `${BACKEND_URL}/api/broadcasting/auth`,
//   encrypted: true,
// })

// Soketi:
const echo = new Echo({
  broadcaster: 'pusher',
  key: PUSHER_APP_KEY,
  wsHost: PUSHER_HOST ?? null,
  wsPort: PUSHER_PORT ?? 6001,
  wssPort: PUSHER_PORT ?? 6001,
  cluster: PUSHER_APP_CLUSTER,
  forceTLS: true,
  encrypted: true,
  disableStats: true,
  authEndpoint: `${BACKEND_URL}/api/broadcasting/auth`,
  enabledTransports: ['ws', 'wss'],
})

echo.setAuthorizationHeaders = userToken => {
  echo.connector.options.auth.headers['Authorization'] = `Bearer ${userToken}`
}

// https://github.com/beyondcode/laravel-websockets/issues/163#issuecomment-1142415771
echo.connector.pusher.connection.strategy.transports.wss.transport.manager.livesLeft = Infinity

export default echo
