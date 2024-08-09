import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { constrant } from './components/CustomInput'
import AntDesgin from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'
import Snackbar from 'react-native-snackbar'
const SignUp = () => {
  const navigation = useNavigation()
  const[password,setPassword]=useState('')
  const[isPasswordVisible,setIsPasswordVisible]=useState(false)
  

const togglePasswordVisibility=()=>
{ setIsPasswordVisible(!isPasswordVisible);

}
const[email,setEmail]=useState('')
const SinUp=()=>{
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    Snackbar.show({
    text:'User account created & signed in!',
    duration: Snackbar.LENGTH_SHORT,
    action: {
      text: 'UNDO',
      textColor: 'green',
    },
  });
    navigation.replace('Sign')
  })
  .catch(error => {
    if (error.code === 'auth/invalid-email address is already in use') {
      console.log('That email address is already in use!');}

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');}

    console.error(error);
  });



}
  return (

  
    <View style={styles.style}>
    <Text style={styles.text}>Create an account
      </Text>
      <View style={styles.style2}>
      <AntDesgin  name='user'size={30} color='gray'/>

        <TextInput style={styles.style1}
        placeholder='Username or Email'
        value={email}
        onChangeText={setEmail}/>
      </View>
      <View > 
      <View style={styles.style2}>
        <Entypo name='lock'size={26} color='gray'/>
        <TextInput style={styles.style1}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        
        />
        <View style={{position:'absolute',right:10}}>
          <TouchableOpacity onPress={togglePasswordVisibility}>

        <Feather name= {isPasswordVisible ?'eye' : 'eye-off' }size={25} color='gray' />
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.style2}>
        <Entypo name='lock'size={26} color='gray'/>
        <TextInput style={styles.style1}
        placeholder='Confirm Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        
        />
        <View style={{position:'absolute',right:10}}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
          <Feather name= {isPasswordVisible? 'eye':'eye-off'}size={25} color='gray' />
          </TouchableOpacity>
        </View>
        </View>
        </View>
        <View>
         <Text style={{fontSize:12,fontWeight:'regular',padding:10}}>
         By clicking the Register button, you agree to the public offer</Text>   
        </View>
        <TouchableOpacity onPress={SinUp}>
        <View style={styles.box3}>
        
          <Text style={styles.text1}>
          Create Account
          </Text>
     
         </View>
         </TouchableOpacity>
        <View style={styles.text2}>
          <Text style={{fontSize:12,fontWeight:'medium'}}>
          - OR Continue with -
          </Text>
         </View>
         <View style={{flexDirection:'row',alignSelf:'center',gap:10}}>
          <View style={styles.container}>
        <Image style={{  width: 20,height: 20,borderRadius: 10,}}source={require('../src/images/google.png')}/>
          </View>
          
          <View style={styles.container} >
        <Image source={require('../src/images/apple1.png')}/>
          </View>
          <View style={styles.container} >
        <Image source={require('../src/images/facebook.png')}/>
          </View>
         </View>
         <View style={styles.box4}>
          <Text style={{fontSize:14,fontWeight:'regular'}}>
          I Already Have an Account
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
            <Text style={styles.box}>
            Login
            </Text>
          </TouchableOpacity>
         </View>







    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
style:{backgroundColor:constrant.style,flex:1}, 
text:{fontWeight:constrant.weight,fontSize:constrant.size,color:constrant.colour,padding:constrant.padding},
style1:{color:constrant.color2,fontSize:constrant.Size,fontWeight:constrant.Weight},
style2:{flexDirection:constrant.Direction,alignItems:constrant.alignItems,backgroundColor:constrant.backColor,borderRadius:constrant.radius,width:constrant.width,
alignSelf:constrant.Self,padding:constrant.padding1,borderColor:constrant.Color3,borderWidth:constrant.border,margin:constrant.margin,padding:constrant.padding3},
text2:{alignSelf:constrant.Self,padding:constrant.padding},
box4:{alignSelf:constrant.Self,padding:constrant.padding4,flexDirection:constrant.Direction},
container:{ width: 50,height: 50,borderRadius: 50,borderWidth: 2,backgroundColor:'#FCF3F6',
borderColor: '#FF4081', 
justifyContent: 'center',
alignItems: 'center',},
box:{color:'#F83758',fontWeight:'regular',fontSize:14,textDecorationLine:'underline'},
box3:{backgroundColor:constrant.color,width:constrant.width,padding:constrant.style,alignItems:constrant.alignItems,alignSelf:constrant.Self,borderRadius:constrant.border5,margin:constrant.margin},
text1:{fontWeight:constrant.font,fontSize:constrant.size3,color:constrant.style,padding:constrant.style2},
})