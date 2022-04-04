import { Button, View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../store/HomeSlice'

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const list = useSelector(store => store.product.products)
  const [inputVl, setInputVl] = useState()

  const onAddProduct = () => {
    dispatch(addProduct(inputVl))
  }

  const onChangeText = (txt) => setInputVl(txt)


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewFeed Screen</Text>
      {list?.map((e, i) =>
        <View key={i} style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10 }}>{e}</Text>
          <TouchableOpacity>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
      <TextInput
        style={{ height: 50, width: '100%', borderWidth: 1 }}
        onChangeText={onChangeText}
        value={inputVl}
      />
      <TouchableOpacity onPress={onAddProduct}>
        <Text>Add User</Text>
      </TouchableOpacity>
    </View>
  )
}