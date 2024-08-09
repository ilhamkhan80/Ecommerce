import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Cart = () => {
    const route=useRoute()
const{id}=route.params
    const navigation=useNavigation()
    const [products,setProducts]=useState()
    useEffect(()=>{
    items()
},[])

    const items=async ()=>{
  const response=await fetch(`https://fakestoreapi.com/products/${id}`)
  console.log("🚀 ~ items ~ response:", response)
  const json=await response.json()
  console.log("🚀 ~ items ~ json:", json)
  console.log(json)
  setProducts(json)
    }
  return (
    <View style={{flex:1}}>
        <View>
     
        </View>
    
        <View style={styles.box}>
            <Image style={{height:150,width:150,resizeMode:'contain'}} source={{uri:products?.image}}/>
        </View>
      
            <View style={[styles.box1,{flexDirection:'column'}]}>
                <Text style={styles.box2}>
                {products?.title}
                </Text>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:14}}>
                        ${products?.price}
                    </Text>
                </View>
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'regular',fontSize:14}}>
               {products?.category}
               </Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:10}}>
                <AntDesign name='star' color='yellow'/>
                <AntDesign name='star' color='yellow'/>
                <AntDesign name='star' color='yellow'/>
                <AntDesign name='star' color='yellow'/>
                <FontAwesome name='star-half-empty' color='gray'/>
                <Text style={{fontSize:14,color:'gray',marginLeft:10}}>
                        {products?.rating.rate}
                </Text>
            </View>
            <View>
                <Text style={[styles.box2,{padding:10}]}>
                Product Details
                </Text>
            </View>
            <View>
                <Text style={[styles.box2,{padding:10,fontWeight:'regular',fontSize:15}]}>
              {products?.description}
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity>
            <View style={{padding:15,margin:10,backgroundColor:'#3F92FF',flexDirection:'row',borderRadius:5}}>
            <EvilIcons name='cart' size={20} color='white'/>
            
                <Text style={{color:'white',fontWeight:'medium',fontSize:16,marginLeft:10}}>
                Go to cart

                </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('CheckOut')}>
            <View style={{padding:15,margin:10,backgroundColor:'#31B769',flexDirection:'row',borderRadius:5,}}>
                
            <Image source={require('../src/images/Group.png')}/>
                <Text style={{color:'white',fontWeight:'medium',fontSize:16,marginLeft:10}}>
                Buy Now

                </Text>
            </View>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
style:{borderWidth:1,borderColor:'#FA7189',padding:10},
style2:{fontSize:14,fontWeight:'medium',color:'#FA7189'},
style3:{flexDirection:'row',gap:10,marginLeft:10},
box:{alignItems:'center',margin:15,backgroundColor:'white',borderWidth:1,shadowColor:'white',shadowOpacity:20,elevation:30,borderColor:'white'},
box1:{padding:10,margin:10,flexDirection:'row'},
box2:{color:'black',fontWeight:'bold',fontSize:20},
})