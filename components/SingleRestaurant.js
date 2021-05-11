import React from 'react'
import { Text, Card } from 'react-native-elements'
import { View, StyleSheet, Button } from 'react-native'

function SingleRestaurant({ eachRestaurant }) {
  return (
    <View key={eachRestaurant.id}>
      <Card>
        <Card.Title>{eachRestaurant.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{
          uri: eachRestaurant.photoUrl,
        }}
        >
          <Text style={styles.containerText}>{eachRestaurant.address}</Text>
          <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card.Image>
      </Card>
    </View>
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