import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { constrant } from './components/CustomInput'
import AntDesgin from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'
const Sign = () => {
  const navigation=useNavigation()
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  const[isPasswordVisible,setIsPasswordVisible]=useState(false)
const togglePasswordVisibility=()=>
{ setIsPasswordVisible(!isPasswordVisible);

}
const SignIn=()=>{
  auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  navigation.replace('bottom')
}






  return (
    <View style={styles.style}>
      <Text style={styles.text}> Welcome Back!
      </Text>
      <View style={styles.style2}>
      <AntDesgin  name='user'size={28} color='gray'/>


        <TextInput style={styles.style1}
        placeholder='Username or Email'
        value={email}
        onChangeText={setEmail} />
      </View>
      <View  > 
      <View style={styles.style2}>
      <Entypo name='lock'size={26} color='gray'/>
      <TextInput style={styles.style1}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}/>
        <View style={{position:'absolute',right:10}}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
          <Feather name={ isPasswordVisible? 'eye':'eye-off'} size={25} color='gray' />
          </TouchableOpacity>
        </View>
        </View>
        </View>
        
        <View style={styles.box2}>
         <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
            <Text style={styles.box}>
            Forgot Password?   
            </Text>
         </TouchableOpacity>   
        </View>
        <TouchableOpacity onPress={SignIn}>
        <View style={styles.box3}>
        
          <Text style={styles.text1}>
          Login
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
          Create An Account
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.box}>
            Sign Up
            </Text>
          </TouchableOpacity>
         </View>



    </View>
  )
}

export default Sign

const styles = StyleSheet.create({
style:{backgroundColor:constrant.style,flex:1},
text:{fontWeight:constrant.weight,fontSize:constrant.size,color:constrant.colour,padding:constrant.padding},
style1:{color:constrant.color2,fontSize:constrant.Size,fontWeight:constrant.Weight},
style2:{flexDirection:constrant.Direction,alignItems:constrant.alignItems,backgroundColor:constrant.backColor,borderRadius:constrant.radius,width:constrant.width,
alignSelf:constrant.Self,padding:constrant.padding1,borderColor:constrant.Color3,borderWidth:constrant.border,margin:constrant.margin,padding:constrant.padding3},
container:{ width: 50,height: 50,borderRadius: 50,borderWidth: 2,backgroundColor:'#FCF3F6',
borderColor: '#FF4081', 
justifyContent: 'center',
alignItems: 'center',},
box:{color:'#F83758',fontWeight:'regular',fontSize:14,textDecorationLine:'underline'},
box2:{padding:constrant.padding,alignSelf:constrant.self},
box3:{backgroundColor:constrant.color,width:constrant.width,padding:constrant.style,alignItems:constrant.alignItems,alignSelf:constrant.Self,borderRadius:constrant.border1,margin:constrant.margin},
text1:{fontWeight:constrant.font,fontSize:constrant.size3,color:constrant.style,padding:constrant.style2},
text2:{alignSelf:constrant.Self,padding:constrant.padding},
box4:{alignSelf:constrant.Self,padding:constrant.padding4,flexDirection:constrant.Direction},

})