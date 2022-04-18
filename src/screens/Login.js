import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { signInApi } from '../store/AuthSlice'

export default function Login({ route, navigation }) {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    "email": "google1@cee.com",
    "password": "123456"
  })

  const onLogin = () => {
    dispatch(signInApi(user))
  }
  return (
    <View style={{ padding: 20 }}>
      <Text>Comment:</Text>
      <Text>Ahii</Text>
      <TouchableOpacity onPress={onLogin} style={{ marginTop: 20 }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}