import React from 'react'
import { Text, Card } from 'react-native-elements'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

function SingleRestaurant({ eachRestaurant }) {
  return (
    <View containerStyle={{ maxWidth: 300 }}>
      <Card>
        <Card.Title>{eachRestaurant.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: eachRestaurant.photoUrl,
          }}
        ></Card.Image>
          <Text style={styles.containerHeading}>{eachRestaurant.address}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeading: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center'
  }
})

export default SingleRestaurant