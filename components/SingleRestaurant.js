import React from 'react'
import { Text, Card } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

function SingleRestaurant({ eachRestaurant }) {
  return (
    <TouchableOpacity onPress={() => 'ResDetails'}>
      <Card>
        <Card.Title>{eachRestaurant.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{
          uri: eachRestaurant.photoUrl,
        }}
        >
          <Text style={styles.containerText}>{eachRestaurant.address}</Text>
        </Card.Image>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center'
  }
})

export default SingleRestaurant