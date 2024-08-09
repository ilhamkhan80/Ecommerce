import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { constrant } from './components/CustomInput'

const Screen1 = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1}} >
    <View  >
    <Image source={require('../src/images/design.png')}/>
    </View>
    <View style={styles.box4}>
    <View >
        <Text style={styles.style}>
        You want Authentic, here you go!
        </Text>
    </View>
    <View>
      <Text  style={[styles.style,{fontSize:14,fontWeight:'regular',padding:10}]}>
      Find it here, buy it now!
    </Text>  
    </View>
    <TouchableOpacity style={{width:'90%'}}onPress={()=>navigation.navigate('bottom')}>
    <View  style={styles.box3}>
   
    
        
          <Text style={styles.text1}>
          Get Started
          </Text>
         
        
         
          </View>
          </TouchableOpacity>
         </View>
    </View>
    
  )
}

export default Screen1

const styles = StyleSheet.create({
box3:{backgroundColor:constrant.pink,width:constrant.width,padding:constrant.style,alignItems:constrant.alignItems,alignSelf:constrant.Self,borderRadius:constrant.border1,margin:constrant.margin,},
text1:{fontWeight:constrant.font,fontSize:constrant.size3,color:constrant.style,padding:constrant.style2},
box4:{position:'absolute',bottom:30,justifyContent:'center',alignItems:'center',alignSelf:'center'},
style:{color:'white',fontSize:34,fontWeight:'semibold'},

})