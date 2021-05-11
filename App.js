import React from 'react'
import { ImageBackground } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import HomeScreen from './screens/HomeScreen'
import ResDetailScreen from './screens/ResDetailScreen'


export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={{ display: 'flex', height: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='ResDetails' component={ResDetailScreen} />
        </Stack.Navigator>
        {/* <HomeScreen /> */}
      </NavigationContainer>
    </ImageBackground>
  )
}


