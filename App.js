import MainStackNavigator from '@/navigators/MainStackNavigator'
import 'expo-dev-client'
import * as Sentry from '@sentry/react-native'

// Sentry
Sentry.init({
  dsn: 'XXX',
  enabled: !__DEV__,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
})

function App() {
  return (
    <MainStackNavigator />
  )
}

export default Sentry.wrap(App)
