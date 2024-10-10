import { StatusBar, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StreamerScreen from '@/screens/StreamerScreen'

const Stack = createStackNavigator()

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.black,
    primary: Colors.black,
  },
}

export default function MainStackNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="Streamer">
          <Stack.Screen
            name="Streamer"
            component={StreamerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
