import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class extends React.Component {
  state= {
    isLoading: true
  };

  getLocation = async() => {
    try{
      //throw Error();
      await Location.requestPermissionsAsync();
      const {coords: { latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false});
      //console.log(coords.longitude, coords.latitude);
      // Send to API and get weather
    } catch(error) {
      Alert.alert("Can not find you~", "So sad");
    }
  };
  
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
} 