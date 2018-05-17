//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,KeyboardAvoidingView } from 'react-native';
import  Registerform from './AppCommponents/Registration/Registerform';
// create a component

export default class Register extends Component {
    
    render() {
        
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
               

               <View style={styles.formContainer}>
                <Registerform /> 
               </View>
            </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    }, 
    logoContainer: {
        alignItems: 'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }
  
 
});
