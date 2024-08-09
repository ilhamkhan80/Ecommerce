import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect,} from 'react'
import {useNavigation, useRoute } from '@react-navigation/native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const Specific = () => {
  const navigation=useNavigation()
    const route=useRoute ()
    const{name}=route.params
    console.log("🚀 ~ Specific ~ name:", name)
    const[products,setProducts]=useState( )
useEffect(()=>{
    item()
},[])
const item=async ()=>{
    const response =await fetch(`https://fakestoreapi.com/products/category/${name}`)
    const json=await response.json()
    console.log(json)
    setProducts(json)}
  return (
    <View>
      <FlatList 
      data={products}
      numColumns={2}
     renderItem={({item})=>{
return(
     <TouchableOpacity onPress={()=>navigation.navigate('Cart',{id:item.id})}>
    <View style={{flex:1,padding:10,margin:10}}>
      <View style={{backgroundColor:'white',elevation:20,justifyContent:'center',alignItems:'center',padding:10,alignContent:'center'}}>
      <Image style={{height:70,width:70,resizeMode:'contain'}}source={{uri: item.image}}/>
        <Text style={{color:'black',fontWeight:'bold'}}>{item.title.slice(0,15)}</Text>
        <Text >{item.description.slice(0,15)}</Text>
        <Text style={{color:'black',fontWeight:'bold'}}>{item.category}</Text>
        <Text style={{fontWeight:'bold'}}>{item.price}</Text>

        
        <View style={{flexDirection:'row'}}>
            
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <FontAwesome name='star-half-empty' color='gray'/>
         <Text style={{fontWeight:'medium'}}> {item.rating.rate}</Text>
          </View>
        
        
        </View>


        </View>
        </TouchableOpacity>
)


     }}

      />
    </View>
  )
}

export default Specific

const styles = StyleSheet.create({})