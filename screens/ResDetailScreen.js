import React from 'react'
import { SafeAreaView, Image } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'

function ResDetailScreen(props) {
  const { restaurant } = props.route.params

  return (
    <SafeAreaView>
      <Image source={{ uri: restaurant.photUrl }} style={{ width: '100%', height: 200 }} />
      <View style={{ width: 200, marginHorizontal: 200 }}>
        <Text> {restaurant.name} </Text>
        <Text> {restaurant.description} </Text>
      </View>

      <Input placeholder='Rate here' style={{ width: 300, height: 60 }} />
      <Button title='Send Rating' style={{ width: 200, alignSelf: 'center' }} />
    </SafeAreaView>
  )
}

export default ResDetailScreen