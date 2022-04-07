import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
// import Reactotron from 'reactotron-react-native'

export default function Home() {

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        // handle success
        console.tron.log('this is response', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  console.tron.log('hello rendering world')

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={getData}>
        <Text>Get Api</Text>
      </TouchableOpacity>
    </View>
  )
}