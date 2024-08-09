import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import { constrant } from './components/CustomInput'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation = useNavigation()
  const data = [{
    Image: require('../src/images/beauty.png')
  },
  {
    Image: require('../src/images/womens.png')
  },
  {
    Image: require('../src/images/clothes.png')
  },
  {
    Image: require('../src/images/fashion.png')
  },
  {
    Image: require('../src/images/womens.png')
  }, {
    Image: require('../src/images/kids.png')
  }, {
    Image: require('../src/images/beauty.png')
  },
  ]

  const arry = [{
    Image: require('../src/images/watch.png'),
    title: 'IWC Schaffhausen 2020 pilot watch',
    price: '$650',
  },
  {
    Image: require('../src/images/manshoe.png'),
    title: 'IWC Schaffhausen 2020 pilot watch',
    price: '$950',
  },
  {
    Image: require('../src/images/man.png'),
    title: 'IWC Schaffhausen 2020 pilot watch',
    price: '$400',
  },
  {
    Image: require('../src/images/man2.png'),
    title: 'IWC Schaffhausen 2020 pilot watch',
    price: '$900',
  },
  {
    Image: require('../src/images/shoes.png'),
    title: 'IWC Schaffhausen 2020 pilot watch',
    price: '$500',
  },]
  const images = [{
    Image: require('../src/images/girlshoe.png')
  },
  {
    Image: require('../src/images/image.png')
  },
  {
    Image: require('../src/images/shoes4.png')
  },

  ]
  const [catagories, setcatagories] = useState('')
  useEffect(() => {
    items()
  }, [])
  const items = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    console.log("🚀 ~ items ~ response:", response)
    const json = await response.json();
    console.log("🚀 ~ items ~ json:", json)
    console.log(json)
    setcatagories(json)
  }


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.style}>
        <Entypo name='menu' size={25} />
        <View style={styles.style2}>
          <Image source={require('../src/images/style2.png')} />
          <Text style={{ color: '#4392F9', fontWeight: 'bold', fontSize: 18 }}>
            Stylish
          </Text>

          <View style={styles.text}>
            <TouchableOpacity onPress={() => navigation.navigate('Check')}>
              <Image source={require('../src/images/girl.png')} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <View style={styles.text2}>
        <AntDesign name='search1' size={20} />
        <TextInput placeholder='Search any Product..' />
        <View style={styles.text}>
          <Feather name='mic' size={20} />
        </View>
      </View>
      <View style={[styles.style, { alignItems: 'center' }]}>
        <Text style={styles.text3}>
          All Featured
        </Text>
        <View style={styles.box1}>
          <View style={[styles.style, { alignItems: 'center', backgroundColor: 'white', borderWidth: 2, width: '50%', borderColor: 'white', padding: 10 }]}>
            <Text style={styles.text4}>
              Sort
            </Text>
            <FontAwesome name='sort-amount-asc' />
          </View>
          <View style={[styles.style, { alignItems: 'center', backgroundColor: 'white', borderWidth: 2, width: '50%', borderColor: 'white', padding: 10 }]}>
            <Text style={styles.text4}>
              Filter
            </Text>
            <AntDesign name='filter' size={17} />
          </View>
        </View>
      </View>

      <View>

        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <View style={{ gap: 20, margin: 5 }}>
                <Image source={item.Image} />
              </View>

            )
          }}
        />
      </View>
      <View>
        <FlatList
          data={catagories}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate('Specific',{name:item})}>
              <View style={styles.box2}>
                <Text style={{ fontSize: 14, fontWeight: 'regular', marginLeft: 10 }}>{item}</Text>
              </View>
             </TouchableOpacity>
            )

          }}
        />
      </View>

      <ScrollView>

      <View style={{ margin: 10, backgroundColor: '#4392F9', width: '95%', padding: 12, borderRadius: 5 }} >
        <Text style={{ fontSize: 12, fontWeight: 'medium', color: 'white' }}>Deal of the Day</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name='clockcircleo' color='white' />
          <Text style={{ fontSize: 12, fontWeight: 'regular', color: 'white' }}>
            22h 55m 20s remaining
          </Text>
          <View style={{ position: 'absolute', right: 0, borderWidth: 1, borderColor: 'white', padding: 5, flexDirection: 'row', borderRadius: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
              <View style={{ flexDirection: 'row' }}>

                <Text style={{ fontSize: 12, fontWeight: 'semibold', color: 'white', }}>
                  View All
                </Text>
                <View >
                  <AntDesign name='arrowright' color='white' />
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <View>


        <FlatList
          data={arry}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <View >
                <View style={{ backgroundColor: 'white', elevation: 10, borderWidth: 1, alignItems: 'center', borderColor: 'white', shadowColor: 'white', shadowOpacity: 20 }}>
                  <Image style={{ height: 150, width: 150, padding: 10 ,resizeMode:'contain'}} source={item.Image} />
                  <Text style={{ color: 'back', fontSize: 12, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ fontWeight: 'bold' }}>{item.price}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='star' color='yellow' />
                    <AntDesign name='star' color='yellow' />
                    <AntDesign name='star' color='yellow' />
                    <AntDesign name='star' color='yellow' />
                    <FontAwesome name='star-half-empty' color='gray' />

                  </View>
                </View>
              </View>

            )
          }}
        />

      </View>
      <View>

        <FlatList
          data={images}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View >
                <Image source={item.Image} />
              </View>

            )
          }}
        />



      </View>
      <View>
        <Text style={[styles.text4, { fontSize: 20 }]}>
          UPTO 50% OFF
        </Text>
      </View>

      </ScrollView>


    </View>










  )
}

export default Home

const styles = StyleSheet.create({
  style: { flexDirection: constrant.Direction, },
  style2: { justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row' },
  text: { position: 'absolute', right: 10 },
  text2: { flexDirection: 'row', alignItems: 'center', margin: 5 },
  text3: { fontSize: 18, fontWeight: 'semibold', color: 'black', padding: 10 },
  text4: { fontWeight: 'bold', fontSize: 12, color: 'black' },
  box1: { position: 'absolute', right: 10, flexDirection: 'row', gap: 10 },
  box2: { padding: 2, justifyContent: 'center', gap: 3, borderColor: 'white', borderWidth: 1, shadowOpacity: 10, shadowOffset: 20 },

})