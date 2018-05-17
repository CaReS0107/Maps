import React, {Component} from "react";

import {StyleSheet,Dimension, View,TextInput, Image,Text,TouchableOpacity} from "react-native";
 const {width, height} = Dimension.get('window')
import MapView from'react-native-maps'

export default class maps extends Component {

  constructor(){

    super ()
      this.state = {
        region:{
          latitude: null,
          longitude: null,
          latitudeDelta: null,
          longitudeDelta:null

        }
      }
  }
    
    calcDelta(lat, lon, accuracy){
        const oneDegreeOfLongitudInMeters = 111.32;
        const circumferance = (40075 / 360)
        const latDelta = accuracy * (1 / (Math.cos(lat) * circumferance))
        const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)
        
        this.setState({
          region: {
            latitude: lat,
            longitude: lon,
            latitudeDelta: latDelta,
            longitudeDelta:lonDelta

          }
        })
    }
    componentWillMount (){

      navigator.geolocation.getCurentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          const accuracy  = position.coords.accuracy
          this.calcDelta(lat, lon, accuracy)

            }

         )
    }
    render() {

      return(
        <View style={styles.container}>
         
        {this.state.region.latitude ?<MapView
        style={styles.map}
        initialRegion = {this.state.region}
        /> :null }
        </View>
      );
    }

}

const styles = StyleSheet.create({
container:{
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: ' #F5FCFF'
},
map:{
 flex:1,
 width:width,

}

});