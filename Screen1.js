import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <View style={{flex:1}}>
        <Image source={require('../')}/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})