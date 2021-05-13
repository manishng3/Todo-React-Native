/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInputComponent,
   useColorScheme,
   View,
 } from 'react-native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { NavigationContainer } from '@react-navigation/native';
 
 import LoginScreen from './src/containers/loginContainer'
 import SignupScreen from "./src/screens/SignupScreen"


 const App = () => {
      const Drawer = createDrawerNavigator();
      return (
       <NavigationContainer>
         <Drawer.Navigator  mode="card"
         initialRouteName = "LoginScreen">  
           <Drawer.Screen name = "LoginScreen"
            component = {LoginScreen}
            options={{
              gestureEnabled: false,
            }}/>
             <Drawer.Screen name = "SignupScreen"
            component = {SignupScreen}
            options={{
              gestureEnabled: false,
            }}/>

         </Drawer.Navigator>
       </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   container : {
     flex:1,
     backgroundColor: 'white',
   }
 });
 
 export default App;