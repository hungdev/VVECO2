import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
// import Reactotron from 'reactotron-react-native'
import { getTodo } from '../services/ApiConfig'

export default function Home() {

  const getData = async () => {
    // axios.get('https://jsonplaceholder.typicode.com/todos/1', { token })
    //   .then(function (response) {
    //     // handle success
    //     console.tron.log('this is response', response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    // getTinh().then((response) => {
    //   // id tinh
    //   // handle success
    //   console.tron.log('this is response', response);
    //   getHuyen(response.id).then(rs => {
    //     getXa(rs.id).then(xa => {
    //       getThon(xa.id).then(thon => {
    //         getXom(thon.id).then(xom => console.log(xom) )
    //       })
    //     })
    //   })
    // })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    // try {
    //   const tinh = await getTinh()
    //   const xa = await getXa(tinh.id)
    //   const thon = await getXa(xa.id)
    //   const xom = await getXa(thon.id)
    // } catch (error) {
    //   console.log(error);
    // }


    const todoList = await getTodo()
    console.tron.log('todoList', todoList)

  }


  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={getData}>
        <Text>Get Api</Text>
      </TouchableOpacity>
    </View>
  )
}