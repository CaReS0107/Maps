//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import  Loginform from './Loginform';
// create a component

export default class Login extends Component {
   
    render() {
        
        return (
            
            <View style={styles.container}>
               <View style={styles.logoContainer}>
               <Image 
               
                 style={styles.dimension}
                 source={ require('./ugal.png')}
               /> 
               <Text style={styles.logotitle}>Welcome To UDJG Maps</Text>
               <Text style={styles.logotitle}>Please Log In</Text>
               </View>

               <View style={styles.formContainer}>
                <Loginform />
               </View>
            </View>
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    dimension: {
        width: 200,
        height: 200
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    logotitle: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center'

    }
});





