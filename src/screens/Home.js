import { Button, View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../store/HomeSlice'

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const list = useSelector(store => store.product.products)

  const onAddProduct = () => {
    dispatch(addProduct('Tshirt'))
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewFeed Screen</Text>
      {list?.map((e, i) => <Text key={i}>{e}</Text>)}
      <TouchableOpacity onPress={onAddProduct}>
        <Text>Add User</Text>
      </TouchableOpacity>
    </View>
  )
}