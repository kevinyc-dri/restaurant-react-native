import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  View,
  Button,
  ScrollView
} from 'react-native'
import SingleRestaurant from './components/SingleRestaurant'
import { Card, Text } from 'react-native-elements'


export default function App() {
  // console.log('this is the platform', Platform.OS == 'ios' ? true : false)
  const [restaurants, setRestaurants] = useState(null)

  useEffect(function () {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(err => console.log(err))
  }, [])

  console.log(restaurants)

  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Boca Code Restaurants</Text>
      <ScrollView>
        {restaurants
          && restaurants.map(eachRestaurant => {
            return (
              <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant} />
            )
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orchid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    width: 200,
    height: 300,
  }
});
