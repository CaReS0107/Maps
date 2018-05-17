//import liraries
import React, { Component } from 'react';
import { View,TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';


// create a component
export default class Loginform extends Component {
    render() {
        return (
            
            <View style={styles.container}>
            
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
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
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


