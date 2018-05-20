import React, { Component } from "react";

import { StyleSheet, Dimensions, View, Text, AppRegistry, ActivityIndicator, ToastAndroid } from "react-native";
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');


export default class App extends Component {

  constructor() {

    super()
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
      }
    }
  }

  calcDelta(lat, lon, accuracy) {
    const oneDegreeOfLongitudInMeters = 111.32;
    const circumferance = (40075 / 360)
    const latDelta = accuracy * (1 / (Math.cos(lat) * circumferance))
    const lonDelta = (accuracy / oneDegreeOfLongitudInMeters)

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta,
      }

    }, () => console.log(this.state.region))
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      },
      (error) => { ToastAndroid.show(error.message, ToastAndroid.SHORT) },
      { enableHighAccuracy: true, },
    );


  }
  marker() {
    return {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude

    }
  }
  render() {
    console.log(this.state.region.latitude);
    if (this.state.region.latitude == null) {

      return <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    }

    return (
      <View style={styles.container}>


        <MapView
          style={styles.map}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate={this.marker()}
            title="You are Here"
            description="Your Location"
          />



        </MapView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9'
  },
  map: {
    flex: 1,
    width: width,

  }

});
