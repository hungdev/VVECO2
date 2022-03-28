import { View, Text } from 'react-native'
import React from 'react'

export default function Comment({ route, navigation }) {
  const { data } = route.params;
  return (
    <View>
      <Text>Comment: {data}</Text>
    </View>
  )
}