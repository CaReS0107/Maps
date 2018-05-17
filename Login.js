import React, {Component} from "react";
import {StyleSheet, View,TextInput, Image,Text,TouchableOpacity} from "react-native";

export default class Login extends Component {
    static navigationOptions = {
        tabBarLabel:'Login'
    }
    render() {

      return(
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require ('./ugal.png')}/>
              <Text style={styles.title}>
              Welcome To UDJG Maps, Please Log In  
              </Text>
               
            </View>
            <View style={styles.formContainer}>
            <TextInput 
                placeholder="Username or Email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="next"
                onSubmitEditing={()=>this.passwordInput.focus()} 
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.8)"
                 secureTextEntry
                 returnKeyType="go"
                 ref={(input) => this.passwordInput = input}
                 style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log In</Text>
                 </TouchableOpacity>
    
            </View>
          </View>

      );
    }

}

const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#3498db',
  padding: 20
},
logoContainer: {
  alignItems: 'center',
  flexGrow:1,
  justifyContent: 'center'

},
logo: {
  width:125,
  height:125
},
title: {
  color:'#FFF',
  marginTop:10,
  width:250
},
input: { 
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 7,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }


});