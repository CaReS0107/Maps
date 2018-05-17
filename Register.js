//import libraries
import React, { Component } from 'react';
import { View,TextInput,Image,StyleSheet,TouchableOpacity,Text } from 'react-native';

// create a component

export default class Register extends Component {
    static navigationOptions = {
        tabBarLabel:'Register'
    }
    render() {
        
        return (
            
            <View style={styles.container}>
            
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require ('./ugal.png')}/>
              
               
            </View>
                <TextInput 
                placeholder="Full Name"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="next"
                style={styles.input}
                />
                <TextInput 
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.8)"
                returnKeyType="next"
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
                    <Text style={styles.buttonText}>Register</Text>
                 </TouchableOpacity>
                
            </View>
           
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
       flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
       backgroundColor: '#3498db',
      
    },
    input: { 
        top: 100,
        height:40,
        width: 280,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 7,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        top: 100,
        height:40,
        width: 280,
        justifyContent: 'center',
        backgroundColor:'#2980b9',
        paddingVertical:10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },logo: {
  width:125,
  height:125
}

  
 
});
