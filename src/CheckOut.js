import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const CheckOut = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,padding:10}}>
 <View style={{flexDirection:'row'}}>
    <Feather name='arrow-left'size={27} color='black'/>
    <View style={styles.box1}>
    <Text style={styles.style}>
            Checkout     
            </Text>
        </View>
        </View>
        <View style={styles.box}>
          <EvilIcons name='location' size={20} />
       <Text  style={styles.style}>
       Delivery Address</Text>
     </View>
     <View  style={{flexDirection:'row',elevation:20}}>
     <View style={styles.view}>
        <Text style={styles.box2}>
            Address
        </Text>
       <View>
        <Text style={{fontWeight:'regular',fontSize:12,color:'black'}}>
        216 St Paul's Rd, London N1 2LL, UK
        Contact :  +44-784232
        </Text>
       </View>
     </View>
     <View style={[styles.view,{alignSelf:'center',alignItems:'center',width:'30%',padding:20,borderColor:'white'}]}>
        <TouchableOpacity>
        <AntDesign name='pluscircleo' color='black'/>
        </TouchableOpacity>
     </View>
     </View>
     <View style={styles.box}>
       <Text  style={styles.style}>
       Shopping List</Text>
     </View>
     <View>
        
    <View style={styles.box3}>
       
        <View >
            <TouchableOpacity onPress={()=>navigation.navigate('Shopping')}>
          <Image source={require('../src/images/girl2.png')}/> 
          </TouchableOpacity> 
        </View>
        <View >
        <View style={{flexDirection:'column'}}>
            <Text style={[styles.box2,{padding:5,fontSize:14}]}>
            Women’s Casual Wear
            </Text>
        </View>
        <View style={styles.view1}>
         <Text style={[styles.box2,{padding:5}]}>
         Variations</Text>  
         <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                Blcak
            </Text>
        </View> 
        <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                Red
            </Text>
        </View> 
        </View>
        <View style={[styles.view1,{gap:2}]}>
            <Text style={styles.box}>
                4.8
            </Text>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='staro' color='gray'/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
        <Text style={[styles.style,{padding:5}]}>
        $ 34.00
        </Text>
        <View> 
            <Text style={[styles.box2,{fontSize:8,color:'#EB3030'}]}>
            upto 33% off  
            </Text>
            <View>
                <Text style={[styles.box2,{color:'#A7A7A7',textDecorationLine:'line-through'}]}>
                $ 64.00
                </Text>
            </View>
        </View>
        
        </View>
        
        </View>
       
    </View>
    
    
    <View style={styles.box3}>
        <View >
          <Image source={require('../src/images/man.png')}/>  
        </View>
        <View >
        <View style={{flexDirection:'column'}}>
            <Text style={[styles.box2,{padding:5,fontSize:14}]}>
            Men’s Jacket            </Text>
        </View>
        <View style={styles.view1}>
         <Text style={[styles.box2,{padding:5}]}>
         Variations</Text>  
         <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                Green
            </Text>
        </View> 
        <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                Gray
            </Text>
        </View> 
        </View>
        <View style={[styles.view1,{gap:2}]}>
            <Text style={styles.box}>
                4.7
            </Text>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star' color='gray'/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
        <Text style={[styles.style,{padding:5}]}>
        $ 45.00
        </Text>
        <View> 
            <Text style={[styles.box2,{fontSize:8,color:'#EB3030'}]}>
            upto 29% off  
            </Text>
            <View>
                <Text style={[styles.box2,{color:'#A7A7A7',textDecorationLine:'line-through'}]}>
                $ 67.00
                </Text>
            </View>
        </View>
        </View>
        
        </View>
        
    </View>
    
    <View style={styles.box3}>
        <View >
          <Image source={require('../src/images/man2.png')}/>  
        </View>
        <View >
        <View style={{flexDirection:'column'}}>
            <Text style={[styles.box2,{padding:5,fontSize:14}]}>
            Men’s Shoes          </Text>
        </View>
        <View style={styles.view1}>
         <Text style={[styles.box2,{padding:5}]}>
         Variations</Text>  
         <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                blue
            </Text>
        </View> 
        <View style={styles.view2}>
            <Text style={[styles.box2,{fontSize:10}]}>
                Gray
            </Text>
        </View> 
        </View>
        <View style={[styles.view1,{gap:2}]}>
            <Text style={styles.box}>
                4.7
            </Text>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star'color='yellow'/>
            <AntDesign name='star' color='yellow'/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
        <Text style={[styles.style,{padding:5}]}>
        $ 50.00
        </Text>
        <View> 
            <Text style={[styles.box2,{fontSize:8,color:'#EB3030'}]}>
            upto 40% off  
            </Text>
            <View>
                <Text style={[styles.box2,{color:'#A7A7A7',textDecorationLine:'line-through'}]}>
                $ 30.00
                </Text>
            </View>
        </View>
        </View>
        </View>
    </View>
    </View>


























    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({
style:{fontWeight:'semibold',fontSize:18,color:'black'},     
box:{padding:10,flexDirection:'row',alignItems:'center'},
box1:{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'},
box2:{fontWeight:'medium',fontSize:12,color:'black'},
view:{borderWidth:1,width:'70%',borderColor:'white',shadowOpacity:5,shadowColor:'white'},
view1:{flexDirection:'row',alignItems:'center',gap:10},
view2:{borderWidth:1,borderColor:'black',padding:5,shadowOpacity:5},
box3:{flexDirection:'row',padding:5,borderWidth:1,borderColor:'#E9E9E9',width:'90%',height:'28%',shadowColor:'#E9E9E9',shadowOpacity:20,alignItems:'center',justifyContent:'center',margin:10,elevation:10},




})