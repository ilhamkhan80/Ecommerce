import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import Wishlist from './Bottom screens/Wishlist'
import Cart from './Bottom screens/Cart'
import Search from './Bottom screens/Search'
import Setting from './Bottom screens/Setting'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Check from './Check'
import CheckOut from './CheckOut'
import Shopping from './Shopping'
import Screen1 from './Screen1'
import Wallet from './Wallet'
const BottomNavigation = () => {
  const Bottom = createBottomTabNavigator()
  return (
    <Bottom.Navigator screenOptions={{ headerShown: false ,tabBarActiveTintColor:'red',tabBarInactiveTintColor:'gray'}}  >
      <Bottom.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused }) => {
          return (

            <View>

              <Entypo name='home' color= {focused?'red' : 'gray' } size={20} />
            </View>
          )
        }
      }} />
      <Bottom.Screen name='Wishlist' component={Wallet} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View>
              <Entypo name='wallet' color= {focused?'red' : 'gray' } size={20} />
            </View>
          )
        }
      }} />
      <Bottom.Screen name='Cart' component={Cart} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{ borderRadius: 40, height: 40, width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EB3030' }}>
              <Entypo name='shopping-cart'color= {focused?'white' : 'white' }  size={20} />
            </View>
          )
        }
      }} />
      <Bottom.Screen name='Search' component={Shopping} options={{
        tabBarIcon: (focused) => {
          return (
            <Feather name='search' size={20} color= {focused?'red' : 'white' } />
          )
        }
      }} />
      <Bottom.Screen name='Setting' component={Check} options={{
        tabBarIcon: (focused) => {
          return (
            <AntDesign name='setting' size={20} color= {focused?'red' : 'white' }/>

          )

        }
      }} />
    </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})