import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,Platform,TouchableOpacity} from 'react-native';
import TextInputComponent from "../components/TextInputComponent";

class LoginScreen extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  state = {
    userName: '',
    password: '',
  }

  getUserName = (receivedValue) => {
    this.setState({userName : receivedValue})
  };
  getPassword = receivedValue => {
    this.setState({password:receivedValue})
  };

  validateInputs = () => {
    const {userName, password} = this.state;
    if(userName == "")
    alert("Please enter a valid user name")
    else if(password =="")
    alert("Please enter a valid password")
    else
    this.login()
  }

  login = () => {
    const userInfo = this.state;
this.props.loginUser(userInfo);  
};

    render(){
      const navigation = this.props.navigation;
        return (<View style = {styles.container}>
            <View style ={styles.topBar}>
            <Text style={styles.barTitle}>Login</Text>
            <TouchableOpacity onPress = {() => {
              navigation.navigate("SignupScreen")
            }}>
            <Text style={styles.barButton}>Signup</Text>
            </TouchableOpacity>
            </View>
            <Image source = {require('./assets/user.png')}
            style={styles.userProfilePicture}/>
            <TextInputComponent
            placeholder = "Username or email address"
            keyboardType="default"
            inputCallbackToParent = { 
              userName => {
                this.getUserName(userName)
              }
            }
            />

            <TextInputComponent
            placeholder = "Password"
            keyboardType="default"
            textPassword = {true}
            type = "password"
            inputCallbackToParent = {password => this.getPassword(password)}
            />
            <TouchableOpacity
          onPress={() => {
            this.validateInputs()
          }}
          style={styles.loginButton}>
                <Image
                style = {styles.buttonIcon}
                source = {require("./assets/tick.png")}
                />
                <Text style = {styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <Text style={styles.loginOptions}>Login with</Text>
        </View>
        );
      }
}

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
      loginButton :{
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
      loginOptions: {
        alignSelf:'center',
        color: 'gray',
        fontSize:12
      },
});

export default LoginScreen;