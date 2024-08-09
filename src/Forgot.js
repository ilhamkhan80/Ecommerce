import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { constrant } from './components/CustomInput'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Forgot = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.style}>
        <View >
      <Text style={styles.text}> Forgot password?
      </Text>
      </View>
      <View style={styles.style2}>
       <Entypo name='mail' size={28} color='gray'/>
        <TextInput style={styles.style1}
        placeholder='Enter your email address'/>
      </View>
      <View style={{height:'20%',width:'70%',padding:10,alignItems:'center'}}>
      <Text style={{fontSize:13,fontWeight:'regular'}}>* We will send you a message to set or reset your new password</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
        <View style={styles.box3}>
      
          <Text style={styles.text1}>
          Submit
          </Text>
         
         </View>
         </TouchableOpacity>
    </View>
  )
}

export default Forgot

const styles = StyleSheet.create({
style:{backgroundColor:constrant.style,flex:1,}, 
text:{fontWeight:constrant.weight,fontSize:constrant.size,color:constrant.colour,padding:constrant.padding},   
style1:{color:constrant.color2,fontSize:constrant.Size,fontWeight:constrant.Weight},
style2:{flexDirection:constrant.Direction,alignItems:constrant.alignItems,backgroundColor:constrant.backColor,borderRadius:constrant.radius,width:constrant.width,
alignSelf:constrant.Self,padding:constrant.padding1,borderColor:constrant.Color3,borderWidth:constrant.border,margin:constrant.margin,padding:constrant.padding3},
box3:{backgroundColor:constrant.color,width:constrant.width,padding:constrant.style,alignItems:constrant.alignItems,alignSelf:constrant.Self,borderRadius:constrant.border1,margin:constrant.margin},
text1:{fontWeight:constrant.font,fontSize:constrant.size3,color:constrant.style,padding:constrant.style2},
})
