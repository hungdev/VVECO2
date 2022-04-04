import { Button, View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const list = useSelector(store => store.productReducer.gifts)

  /**
   *   const list = ['socola', 'hat', 'pant']
   *  list.map(e => <Text>{e}</Text>)
   * 
   * <Text>socola</Text>
   * <Text>hat</Text>
   * <Text>hat</Text>
   */

  const onAddProduct = () => {
    dispatch({ type: "ADD_PRODUCT", data: "tshirt" })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewFeed Screen</Text>
      {/* {list?.map((e, i) => <Text key={i}>{e}</Text>)} */}
      <Button
        title="send from father"
        onPress={() => dispatch({ type: "SEND_FROM_FATHER", data: "socola" })}
      />
      <Button
        title="Go to Comment"
        onPress={() => navigation.navigate('Comment', { data: 'hello' })}
      />
      <TouchableOpacity onPress={() => dispatch({ type: "SEND_FROM_FATHER", data: "socola" })}>
        <Text>I'm pressable!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddProduct}>
        <Text>Add product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: "ADD_USER", data: "hello" })}>
        <Text>Add User</Text>
      </TouchableOpacity>
    </View>
  )
}