import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Comment({ route, navigation }) {
  const { data } = route.params;
  const list = useSelector(store => store.productReducer.gifts)
  return (
    <View>
      <Text>Comment: {data}</Text>
      {list?.map((e, i) => <Text key={i}>{e}</Text>)}
    </View>
  )
}