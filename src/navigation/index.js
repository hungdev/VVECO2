import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";

import NewFeed from '../screens/Home'
import DetailsScreen from '../screens/Detail'
import SettingScreen from '../screens/Setting'
import CommentScreen from '../screens/Comment'
import LoginScreen from '../screens/Login'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NewFeedStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen name="NewFeed" component={NewFeed} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  )
}

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'NewFeedTab') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Detail') {
            iconName = focused ? 'airplane-sharp' : 'airplane-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="NewFeedTab" component={NewFeedStack} options={{ headerShown: false }} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  )
}

function App() {
  const isSignedIn = useSelector(store => store.auth.token)
  console.tron.log('isSignedIn', isSignedIn)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTab">
        {isSignedIn ?
          <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={SettingScreen} />
            </>
          )
        }
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
