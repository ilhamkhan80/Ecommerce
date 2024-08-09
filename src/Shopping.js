import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from  'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Shopping = () => {
    const navigation=useNavigation()

  return (
    <View style={{flex:1,padding:10}}>
         <View style={{flexDirection:'row'}}>
    <Feather name='arrow-left'size={27} color='black'/>
    <View style={styles.box1}>
    <Text style={styles.style}>
       Shopping Bag
            </Text>
        </View>
        <View style={{margin:10,padding:10}}>
           <Image source={require('../src/images/favorite.png')}/> 
        </View>
        </View>
     <View style={{padding:10,margin:10,flexDirection:'row'}}>
        <Image source={require('../src/images/girl3.png')}/>
        <View style={{flexDirection:'column',margin:5}}>
        <View>
       <Text style={[styles.style,{fontSize:16,}]}>
       Women’s Casual Wear
       </Text>
        </View>
        <View>
            <Text style={styles.box4}>
            Checked Single-Breasted Blazer
            </Text>

        </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.style2}>
            <Text style={styles.box4}>
                Size 42
            </Text>
        </View>
        <View style={styles.style2}>
            <Text style={styles.box4}>
                Size 35
            </Text>
        </View>
        </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.box4} >
        Delivery by 
        </Text>
        <View>
            <Text style={[styles.style,{fontSize:14}]}>
            10 May 2XXX
            </Text>
        </View>
      </View>
        </View>
        </View>
        <View  style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <Text style={styles.box2}>
            Apply Coupons
            </Text>
         <View>
            <TouchableOpacity>
            <Text  style={[styles.box2,{color:'#F83758',fontWeight:'bold'}]} >
                Select
            </Text>
            </TouchableOpacity>
         </View>
        </View>
        <View style={{borderWidth:0.3,margin:10,borderColor:'#C4C4C4',elevation:1}}/>

        <View style={{padding:15}}>
            <Text style={styles.style}>
            Order Payment Details
            </Text>
        </View>
        <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.box4,{fontSize:17}]}>
            Order Amounts            </Text>
            <View>
                <Text>
                $7,000.00
                </Text>
            </View>
        </View>
        <View style={{margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[styles.box4,{fontSize:17}]}>
            Convenience</Text>
            <View>
                <TouchableOpacity>
                <Text  style={[styles.box2,{color:'#F83758',fontWeight:'bold'}]}>
                       know more </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                <Text  style={[styles.box2,{color:'#F83758',fontWeight:'bold'}]}>
                Apply Coupon </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.box4,{fontSize:17}]}>
            Delivery          </Text>
            <View>
                <TouchableOpacity>
                <Text style={[styles.box2,{color:'#F83758',fontWeight:'bold'}]}>
                Free
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{borderWidth:0.3,margin:10,borderColor:'#C4C4C4',elevation:1}}/>

        <View style={{margin:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.box4,{fontSize:17}]}>
            Order Total </Text>
            <View>
                <Text>
                $7,000.00
                </Text>
            </View>
        </View>
        <View style={{margin:10,flexDirection:'row',alignItems:'center',gap:10}}>
            <Text style={[styles.box4,{fontSize:17}]}>EMI  Available 
            </Text>
            <View>
                <TouchableOpacity>
                <Text  style={[styles.box2,{color:'#F83758',fontWeight:'bold'}]}>Details
                 </Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{borderWidth:0.3,margin:10,borderColor:'#C4C4C4',elevation:1}}/>

            <View style={[styles.box5,{top:20,}]}>
                <Text style={[styles.box4,{padding:10,fontSize:16,fontWeight:'bold'}]}>
                $7,000.00
                </Text>
                
                <View style={styles.style3}>
                <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
                <Text style={[styles.box2,{color:'white',fontWeight:'bold'}]}>
                Proceed to Payment
                </Text>
                </TouchableOpacity>
                </View>
                
            </View>

    </View>
  )
}

export default Shopping

const styles = StyleSheet.create({
    style:{fontWeight:'semibold',fontSize:18,color:'black'},     
    box:{padding:10,flexDirection:'row',alignItems:'center'},  
    box1:{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'},
    box2:{fontWeight:'medium',fontSize:12,color:'black'},
    box3:{flexDirection:'row',padding:5,borderWidth:1,borderColor:'#E9E9E9',width:'90%',height:'28%',shadowColor:'#E9E9E9',shadowOpacity:20,alignItems:'center',justifyContent:'center'},
    box4:{fontSize:13,fontWeight:'regular'},
    style2:{flexDirection:'row',borderWidth:1,borderRadius:5,width:'30%',justifyContent:'center',margin:10,backgroundColor:'white'},
    box5:{flexDirection:'row',justifyContent:'space-between'},
    style3:{backgroundColor:'#F83758',width:'60%',padding:10,alignItems:'center',borderRadius:9},
})