import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { constrant } from './components/CustomInput'

const Splash = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.style}>
        <View style={styles.style1}> 
            <Image source={require('../src/images/style.png')}/>
      <Text style={styles.style2}>Stylish</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
 style:{flex:1,backgroundColor:constrant.style,justifyContent:'center',padding:15}, 
 style1:{alignItems:'center',flexDirection:'row',justifyContent:'center'},
 style2:{color:'#F83758',fontWeight:constrant.weight,fontSize:40}
})