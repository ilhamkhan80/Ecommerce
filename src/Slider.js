import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { constrant } from './components/CustomInput'
import { useNavigation } from '@react-navigation/native'

const Slider = () => {
    const navigation=useNavigation()
   const data=[{
   title:'Choose Products',
   subtitle:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
   Image:require('../src/images/pic1.png'),
   page:1
},

   {
    title:'Make Payment',
    subtitle:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    Image:require('../src/images/pic2.png'),
    page:2
   },
   {
    title:'Get Your Order',
    subtitle:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    Image:require('../src/images/pic3.png'),
    page:3
   },] 
   return (
    <AppIntroSlider 
    data={data}
    dotStyle={{backgroundColor:'lightgray'}}
    activeDotStyle={{height:10,width:40,backgroundColor:'black'}}
    showNextButton={true}
    showPrevButton={true}
    
    renderNextButton={()=>{
        return(
    <View>
    <Text style={styles.box}> Next</Text>
    </View>

        )
    }}
    renderPrevButton={()=>{
        return(
            <View>
                <Text style={styles.text}>Prev</Text>
            </View>
        )
    }}
    
   
    renderItem={({item,index})=>{
    return(
        <View  style={styles.style1}>
            <View style={styles.box3}>
                <Text style={{color:'black'}}>{item.page}</Text>
            </View>
            <View style={{position:'absolute',top:0,right:0,padding:10,}}>
             <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
              <Text style={{color:'black'}}> SKIP
             </Text>  
             </TouchableOpacity>
            </View>




            <Image source={item.Image}/>
            <Text style={styles.style}>{item.title}</Text>
            <Text  style={{
             color:constrant.colour}}>{item.subtitle}</Text>
            </View>



    )
    
}
    }/>
  )
}

export default Slider

const styles = StyleSheet.create({
style: { color:constrant.colour,fontWeight:constrant.weight,fontSize:constrant.size2 },
style1:{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'},
box:{fontWeight:'semibold',color:constrant.color,top:10,},
box2:{color:constrant.colour,fontSize:18},
text:{color:'#C4C4C4',paddingRight:10,top:10},
box3:{position:'absolute',top:0,left:0,padding:10},
})