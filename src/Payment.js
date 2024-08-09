import { Image, StyleSheet, Text, TouchableOpacity, View ,Modal} from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'


const transparent= 'rgba(0,0,0,0.5)'
const Payment = () => {
  const[modal,setModal]=useState(false)
  function renderModal(){
    return(
<Modal visible={modal} animationType='slide' transparent={true}>
  <View style={{flex:1,justifyContent:'center',alignItems:'center',
    backgroundColor:transparent,
  }}>
    <View style={{padding:15,width:'90%',height:150,borderRadius:10,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>setModal(false)}>
        <View style={{backgroundColor:'#F83758',height:70,width:70,borderRadius:70,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='check'size={40} color='white'/>
        </View>
      </TouchableOpacity>
<Text style={styles.style2}>
  Payment done Successfully
</Text>
    </View>
  </View>

</Modal>

    )
  }

  return (
    <View style={{flex:1,padding:10}}>
          <View style={{flexDirection:'row'}}>
    <Feather name='arrow-left'size={27} color='black'/>
    <View style={styles.box1}>
    <Text style={styles.style}>
      Check Out</Text>
        </View>
        </View>
  <View style={{borderWidth:0.3,margin:10,color:'#A8A8A9'}}/>
 <View style={styles.box2}>
<Text style={styles.box3}>
Order
  </Text>
  <View>
    <Text>
   $ 7,000
    </Text>
  </View>
 </View>
 <View style={styles.box2}>
<Text style={styles.box3}>
Shipping
  </Text>
  <View>
    <Text>
   $ 30
    </Text>
  </View>
 </View>
 <View style={styles.box2}>
<Text style={[styles.box3,{color:'#4C5059'}]}>
Total
  </Text>
  <View>
    <Text  style={[styles.box3,{color:'#4C5059'}]}>

   $ 7,030
    </Text>
  </View>
 </View>
 <View style={{borderWidth:0.3,margin:10,color:'#A8A8A9'}}/>

 <View style={styles.box2}>
<Text style={[styles.box3,{color:'#4C5059'}]}>
Payment
  </Text>
  
 </View>
<View style={[styles.box2,{borderColor:'#F83758',borderWidth:1,padding:15,borderRadius:9,backgroundColor:'#A8A8A9'}]}>
  <View>
    <Image source={require('../src/images/visa1.png')}/>
  </View>
  <Text style={styles.style2}>
  *********2109
  </Text>
</View>
<View style={[styles.box2,{padding:15,borderRadius:9,backgroundColor:'#A8A8A9'}]}>
  <View>
    <Image source={require('../src/images/paypal1.png')}/>
  </View>
  <Text style={styles.style2}>
  *********2109
  </Text>
</View>
<View style={[styles.box2,{padding:15,borderRadius:9,backgroundColor:'#A8A8A9'}]}>
  <View>
    <Image source={require('../src/images/maestro.png')}/>
  </View>
  <Text style={styles.style2}>
  *********2109
  </Text>
</View>
<View style={[styles.box2,{padding:15,borderRadius:9,backgroundColor:'#A8A8A9'}]}>
  <View style={{width: 30,height: 30,borderRadius: 50,borderWidth:1,borderColor:'black',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
    <Image style={{height:12,width:12}} source={require('../src/images/apple1.png')}/>
  </View>
  <Text style={styles.style2}>
  *********2109
  </Text>
</View>
<TouchableOpacity onPress={()=>setModal(true)}>
<View style={{backgroundColor:'#F83758',width:'90%',padding:18,alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:9,marginTop:10}}>


<Text style={{color:'white'}}>
Continue
</Text>
</View>
</TouchableOpacity>
{renderModal()}

    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
box1:{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'},
style:{fontWeight:'semibold',fontSize:18,color:'black'},   
box2:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:10},
box3:{color:'#A8A8A9',fontSize:18,fontWeight:'medium'},
style2:{color:'#6E7179',fontWeight:'medium',fontSize:15}


})