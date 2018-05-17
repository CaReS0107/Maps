//import liraries
import React, { Component } from 'react';
import { View,TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';


// create a component
export default class Registerform extends Component {
    render() {
        return (
            
            <View style={styles.container}>
            
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
                 returnKeyType="next"
                 ref={(input) => this.passwordInput = input}
                 style={styles.input}
                />
                <TextInput 
                placeholder="Confirm Password"
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
        padding: 20
    },
    input: { 
        top: 80,
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
    }

  

});