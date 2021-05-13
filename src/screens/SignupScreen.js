import React, {useState} from 'react';
import {View,Text,StyleSheet,Image,Platform,TouchableOpacity} from 'react-native';
import TextInputComponent from "../components/TextInputComponent"
const SignupScreen = ({navigation}) =>
{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [rePassword,setRePassword] = useState("");
  const [userName,setUserName] = useState("");

  const getUserName = (receivedValue) => {
    setUserName(receivedValue)
  };
  const getPassword = receivedValue => {
    setPassword(password)
  };
  const getRePassword = (receivedValue) => {
    setRePassword(receivedValue)
  };
  const getEmail = receivedValue => {
    setEmail(password)
  };

  

    return(
        <View style = {styles.container}>
            <View style ={styles.topBar}>
            <Text style={styles.barTitle}>Signup</Text>
            <TouchableOpacity onPress = {() => {
              navigation.navigate("LoginScreen")
            }}>
            <Text style={styles.barButton}>Login</Text>
            </TouchableOpacity>
            </View>
            <Image source = {require('./assets/camera.png')}
            style={styles.userProfilePicture}/>
            <TextInputComponent
             placeholder="Email address"
             keyboardType="email-address"
             inputCallbackToParent = {text => getEmail(text)}
             />
            <TextInputComponent
             placeholder="Username"
             keyboardType="default"
             inputCallbackToParent = {text => getUserName(text)}
             />
            <TextInputComponent
            placeholder = "Password"
            textPassword = {true}
            keyboardType="default"
            type = "password"
            inputCallbackToParent = {text => getPassword(text)}
            />
            <TextInputComponent
            placeholder = "Repeat Password"
            textPassword = {true}
            keyboardType="default"
            type = "password"
            inputCallbackToParent = {text => getRePassword(text)}
            />
            <TouchableOpacity
          onPress={() => {}}
          style={styles.signUpButton}>
                <Image
                style = {styles.buttonIcon}
                source = {require("./assets/tick.png")}
                />
                <Text style = {styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.termsOfService}>Terms of Service</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      },
    topBar: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      barTitle : {
          fontSize: 30,
          fontWeight:'600'
      },
      barButton : {
        color: '#aaa',
        fontSize: 20,
        fontWeight: '600',
      },
      userProfilePicture : {
        width:100,
        height:100,
        alignSelf:'center',
        marginBottom:40
      },
      signUpButton :{
          flexDirection : 'row',
          alignItems:'center',
          backgroundColor:'white',
          width : '80%',
          alignSelf:'center',
          marginTop: 30,
          borderRadius: 50,
          padding: 10,
          marginBottom: 40,
          justifyContent:'center',
          ...Platform.select({
            ios: {
              shadowColor: 'blue',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 3,
            },
          }),
      },
      buttonIcon : {
          width:20,
          height:20,
          marginEnd:10
      },
      buttonText :{
          fontSize:20,
          color:"blue"
      },
      termsOfService: {
        alignSelf:'center',
        color: 'gray',
        fontSize:12
      },
});

export default SignupScreen;