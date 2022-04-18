import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
// import Reactotron from 'reactotron-react-native'
import { getTodo, createTodo, updateTodo, deleteTodo } from '../services/ApiConfig'

import { getListTodo, updateListTodo, getCategoryList } from '../store/HomeSlice'
import { clearState } from '../store/AuthSlice'

export default function Home(props) {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const listTodo = useSelector(store => store.product.todo)
  const categories = useSelector(store => store.product.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryList())
  }, [])

  /**
   * có depend = changed => useEffect re-run
   * chỉ có [] => chỉ chạy 1 lần duy nhất
   * ko có [], thì sẽ chạy lại khi render lại ( state or props thay đổi)
   */

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

  const onLogout = async () => {
    dispatch(clearState())
  }

  console.tron.log('categories', categories)


  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => setName('Ceee')} style={{ marginVertical: 20 }}>
        <Text>Change name</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onLogout} style={{ marginVertical: 20 }}>
        <Text>Logout</Text>
      </TouchableOpacity>
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
        {categories?.map(e => <Text key={e?._id} style={{ color: 'red' }}>{e.name}</Text>)}

      </View>
    </View>
  )
}