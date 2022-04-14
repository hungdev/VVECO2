import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
// import Reactotron from 'reactotron-react-native'
import { getTodo, createTodo, updateTodo, deleteTodo } from '../services/ApiConfig'

import { getListTodo, updateListTodo } from '../store/HomeSlice'

export default function Home() {
  const listTodo = useSelector(store => store.product.todo)
  const dispatch = useDispatch()

  const getData = async () => {
    // const todoList = await getTodo()
    // console.tron.log('todoList', todoList)

    dispatch(getListTodo())

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
      body: 'Ceeee',
      userId: 1,
    }

    // const todoRs = await updateTodo(1, data)
    dispatch(updateListTodo({ id: 1, data }))
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
      <View>
        <Text>{JSON.stringify(listTodo)}</Text>
      </View>
    </View>
  )
}