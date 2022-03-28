import { Button, View, Text } from 'react-native';
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewFeed Screen</Text>
      <Button
        title="Go to Comment"
        onPress={() => navigation.navigate('Comment', { data: 'hello' })}
      />
    </View>
  )
}