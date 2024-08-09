import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'

const Screen2 = () => {
    const[products,setProducts]=useState('')
useEffect(()=>{
    item()
},[])
const item=async ()=>{
    const response =await fetch('https://fakestoreapi.com/carts')
    console.log("🚀 ~ item ~ response:", response)
    const json=await response.json()
    console.log("🚀 ~ item ~ json:", JSON.stringify(json.list))
    console.log(json)
    setProducts(json[0])
}

  return (
<View>
    <Text>{products.id}</Text>
    <View>
        <Text>{products.userId}</Text>
    </View>
    <View>
        <Text>{products.date}</Text>
    </View>
    
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})