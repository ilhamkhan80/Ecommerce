import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Splash from './src/Splash';
import Slider from './src/Slider';
import Sign from './src/Sign';
import SignUp from './src/SignUp';
import Forgot from './src/Forgot';
import Screen1 from './src/Screen1'
import Home from './src/Home';
import Wallet from './src/Wallet';
import Check from './src/Check';
import CheckOut from './src/CheckOut';
import Shopping from './src/Shopping';
import Cart from './src/Cart';
import Payment from './src/Payment';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from './src/BottomNavigation';
import Screen2 from './src/Screen2';
import Specific from './src/Specific';
const Stack = createNativeStackNavigator();
const Bottom =createBottomTabNavigator()


const App = () => {

  const [splash, setsplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 3000);
  }, [])

  return (
  

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
     {splash?
        <Stack.Screen name='Splash' component={Splash} />
      :  
        <Stack.Screen name='Slider' component={Slider} />
     }
       <Stack.Screen name='Sign' component={Sign} />
       <Stack.Screen name='SignUp' component={SignUp} />
       <Stack.Screen name='Forgot' component={Forgot} />
       <Stack.Screen name='Screen1' component={Screen1} />
       <Stack.Screen name='bottom' component={BottomNavigation}/>
       <Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='Specific' component={Specific}/>

       <Stack.Screen name='Wallet' component={Wallet} />
       <Stack.Screen name='Cart' component={Cart} />
       <Stack.Screen name='Check' component={Check} />
       <Stack.Screen name='CheckOut' component={CheckOut} />
       <Stack.Screen name='Shopping' component={Shopping}/>
       <Stack.Screen name='Payment' component={Payment}/>


    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App