import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
// import Reactotron from 'reactotron-react-native'
import { getTodo, createTodo, updateTodo, deleteTodo } from '../services/ApiConfig'

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

  const createPost = async () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    const todoRs = await createTodo(data)
  }
  const updatePost = async () => {
    const data = {
      name: 'foo',
      body: 'helle',
      userId: 1,
    }

    const todoRs = await updateTodo(1, data)
  }
  const deletePost = async () => {
    const todoRs = await deleteTodo(1)
  }



  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={getData}>
        <Text>Get Api</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createPost}>
        <Text>Create post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={updatePost}>
        <Text>Update post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deletePost}>
        <Text>Delete post</Text>
      </TouchableOpacity>
    </View>
  )
}