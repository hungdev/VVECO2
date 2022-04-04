import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Comment({ route, navigation }) {
  const { data } = route.params;
  const list = useSelector(store => store.productReducer.gifts)
  const products = useSelector(store => store.productReducer.products)
  const user = useSelector(store => store.userReducer.user)
  return (
    <View>
      <Text>Comment: {data}</Text>
      {list?.map((e, i) => <Text key={i}>{e}</Text>)}
      {products?.map((e, i) => <Text key={i}>{e}</Text>)}
      <Text>{user}</Text>
    </View>
  )
}