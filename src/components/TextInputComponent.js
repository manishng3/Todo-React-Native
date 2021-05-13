import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';

const TextInputComponent = (
    {
        placeholder,
        textPassword,
        type,
        keyboardType,
        multiline,
        maxLength,
        inputCallbackToParent
    }

) =>
{
    const [input,setInput] = useState("");
    const [secure,setSecure] = useState(textPassword);
    
    return (
        <View style = {styles.inputFieldContainer}>
            <TextInput
            secureTextEntry = {secure}
            keyboardType = {keyboardType}
            value = {input}
            onChangeText = { (text) => 
            {
                setInput(text)
                inputCallbackToParent(text)
            }}
            placeholder = {placeholder}
            placeholderTextColor="#ccc"
            multiline = {multiline}
            style = {
                styles.inputField
            }
            
            />
            {
                type == "password" ?  <TouchableOpacity
                onPress = { () => {
                    setSecure(!secure)
                }}>
                <Image
                style  = {styles.iconStyle}
                source = {secure?
                    require( './assets/private.png')
                    :
                    require( './assets/view.png')
                }
                />
                </TouchableOpacity>:
                 null
            }

        </View>
    );
};

const styles = StyleSheet.create({
    inputFieldContainer:{
        flexDirection :'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10,
        width:'85%',
        alignItems: 'center',
        alignSelf:'center',
        alignContent:"space-between"
    },
    inputField: {
        minHeight: 50,
        height: 55,
        backgroundColor: '#fff',
        fontSize: 18,
        width:"90%",
        padding: 10,
        color: '#000',
    },
    iconStyle : {
          height: 25,
          width: 25,
    }
});

export default TextInputComponent   ;