import React, {Component} from "react";

import {StyleSheet,Dimensions, View,Text,AppRegistry} from "react-native";
 import MapView from 'react-native-maps';
 const {width, height} = Dimensions.get('window');


export default class App extends Component {

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
      // man on your gps location service from your mobile pho
      // wait man i think i got it how to save projcetct?   ctrl+s 
      // save it man  done it is not working from here anyway

      navigator.geolocation.getCurentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          const accuracy  = position.coords.accuracy
          this.calcDelta(lat, lon, accuracy)

            }

         )
    }
    marker () {
      return {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude

      }
    }
    render() {

      return(
        <View style={styles.container}>
         
        {this.state.region.latitude ? <MapView
        style={styles.map}
        initialRegion = {this.state.region}
        >  
          <MapView.Marker
          coordinate={this.marker()}
          title = "sunt aici"
          description =  "Home"
          />


        </MapView> :null }
        </View>
      );
    }

}

const styles = StyleSheet.create({
container:{
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor:'#2980b9'
},
map:{
 flex:1,
 width:width,

}

});