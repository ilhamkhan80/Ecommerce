import {  FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { constrant } from './components/CustomInput'
import { useNavigation } from '@react-navigation/native'
const Wallet = () => {
  const navigation=useNavigation()
    const[products,setProducts]=useState('')
useEffect(()=>{
 items()
},[])
const items=async () => {
    const response=await fetch('https://fakestoreapi.com/products')
    console.log("🚀 ~ items ~ response:", response)
    const json = await response.json();
    console.log("🚀 ~ items ~ json:", JSON.stringify(json.list))
    console.log(json)
    setProducts(json)
} 
  return (
  


    <View style={{flex:1,padding:10}}>

<View style={styles.style}>
      <Entypo name='menu' size={25}/>
      <View style={styles.style2}>
      <Image source={require('../src/images/style2.png')}/>
      <Text style={{color:'#4392F9',fontWeight:'bold',fontSize:18}}>
      Stylish
      </Text>
      <View style={styles.text}>
      <TouchableOpacity onPress={()=>navigation.navigate('Check')}>

        <Image source={require('../src/images/girl.png')}/>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <View style={styles.text2}>
    <AntDesign name='search1' size={20}/>
    <TextInput placeholder='Search any Product..'/>
    <View style={styles.text}>
    <Feather name='mic'size={20} />
    </View>
     </View>
     <View style={[styles.style,{alignItems:'center'}]}>
        <Text style={styles.text3}>
        52,082+ Iteams 
        </Text>
        <View style={styles.box1}>
        <View  style={[styles.style,{alignItems:'center',backgroundColor:'white',borderWidth:2,width:'50%',borderColor:'white',padding:10}]}>
            <Text style={styles.text4}>
                Sort
            </Text>
            <FontAwesome name='sort-amount-asc'/>
        </View>
        <View  style={[styles.style,{alignItems:'center',backgroundColor:'white',borderWidth:2,width:'50%',borderColor:'white',padding:10}]}>
            <Text style={styles.text4}>
                Filter
            </Text>
            <AntDesign name='filter'size={17}/>
        </View>
        </View>
     </View>
     <View>
     <FlatList 
      data={products} 
      numColumns={2}
      renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate('Cart',{id:item.id})}>
          <View  style={{backgroundColor:'white',margin:10,borderWidth:1,borderColor:'gray',shadowOpacity:20,alignItems:'center',shadowOffset:10,justifyContent:'center',alignSelf:'center'}}>
          
           
           <Image  style={{height:70, width:70,resizeMode:'contain'}}source={{uri : item.image}}/>
          
           <Text style={styles.text5}>{item.title.slice(0,12)}</Text>
         <Text style={styles.box6}>{item.description.slice(0,29)}...</Text>
        <Text style={{fontWeight:'medium',fontSize:10,color:'black'}}> ${item.price}</Text>
        <Text>{item.rating.rate}</Text>
        <View style={{flexDirection:'row'}}>
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <AntDesign name='star' color='yellow' />
         <FontAwesome name='star-half-empty' color='gray'/>
         <Text>689,000</Text>
          </View>
        
            </View>
            </TouchableOpacity>

        )
      }}     
             
             
             
             />

        </View>




    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
style:{flexDirection:constrant.Direction,},
style2:{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'},
text:{position:'absolute',right:10},
text2:{flexDirection:'row',alignItems:'center',margin:5},  
box1:{position:'absolute',right:10,flexDirection:'row',gap:10},
text3:{fontSize:18,fontWeight:'semibold',color:'black',padding:10},
text4:{fontWeight:'bold',fontSize:12,color:'black'},
text5:{fontSize:16,fontWeight:'medium',color:'black' },
box6:{fontWeight:'regular',fontSize:10}
})