import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from  'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Check = () => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1,padding:10}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
    <Feather name='arrow-left'size={27} color='black'/>
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
    <Text style={styles.style}>
            Checkout     
            </Text>
        </View>
         
        </View>
        <View style={{alignItems:'center',alignSelf:'center'}}>
         <Image style={{height:70,width:70}}source={require('../src/images/girl.png')}/>   
        </View>
        <ScrollView>
        <View>
       <Text  style={styles.style}>
       Personal Details
       </Text>
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Email Address</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Email-address'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Password</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Password'
       color='black'/> 
     </View>
     <View style={{alignSelf:'flex-end'}}>
     <TouchableOpacity>
      <Text style={[styles.style1,{color:'#F83758',textDecorationLine:'underline'}]}>
        Change Password
      </Text>
    </TouchableOpacity>
     </View>
     <View style={{borderWidth:0.3,margin:10,borderColor:'#C4C4C4',elevation:1}}/>
     <View>
       <Text  style={[styles.style,{fontSize:16,color:'black'}]}>
       Business Address Details
       </Text>
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Pincode</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Pincode'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Address</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Address'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       City</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='City'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       State</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='State'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Contry</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Country'
       color='black'/> 
     </View>
     <View style={{borderWidth:0.3,margin:10,borderColor:'#C4C4C4',elevation:1}}/>
     <View>
       <Text  style={[styles.style,{fontSize:16,color:'black',margin:5}]}>
       Bank Account Details
       </Text>
     </View>
     
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Bank Account Number</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Bank Account Number'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       Account Holder’s Name</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='Account Holder’s Name'
       color='black'/> 
     </View>
     <View>
       <Text style={[styles.style1,{padding:10}]}>
       IFSC Code</Text> 
     </View>
     <View style={styles.box}>
       <TextInput 
       placeholder='IFSC Code'
       color='black'/> 
     </View>
     <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
     <View style={styles.box1}>
     
            <Text style={styles.box2}>
                Save
            </Text>
        
     </View>
     </TouchableOpacity>
     </ScrollView>












    </View>
  )
}

export default Check

const styles = StyleSheet.create({
style:{fontWeight:'semibold',fontSize:18},  
style1:{fontWeight:'regular',fontSize:12},  
box:{borderWidth:1,borderRadius:9,borderColor:'#C8C8C8',margin:5},
box1:{backgroundColor:'#F83758',borderRadius:9,width:'90%',padding:10,alignItems:'center',alignSelf:'center',margin:5},
box2:{color:'white',fontWeight:'semibold',fontSize:16},
})