import React, { useState } from 'react'
import { SafeAreaView, Image, View, Alert } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'

function ResDetailScreen(props) {
  const { restaurant } = props.route.params
  const [rating, setRating] = useState()

  const sendRating = () => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants/${restaurant.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rating)
    })
      .then(response => response.json())
      .then(() => props.navigation.navigate('Home'))
      .catch(err => Alert.alert(err))
  }

  return (
    <SafeAreaView>
      <Image source={{ uri: restaurant.photUrl }} style={{ width: '100%', height: 200 }} />
      <View style={{ width: 200, marginHorizontal: 20 }}>
        <Text h3> {restaurant.name} </Text>
        <Text style={{ marginLeft: 20 }}>{restaurant.address} </Text>
      </View>

      <Input
        placeholder='Rate here'
        style={{ width: 200, height: 60 }}
        keyBoardType='numeric'
        onChangeText={e => setRating(e)}
      />
      <Button
        onPress={() => sendRating()}
        title='Send Rating'
        style={{ width: 200, alignSelf: 'center' }}
      />
    </SafeAreaView>
  )
}

export default ResDetailScreen