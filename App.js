import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

// openweathermap API
const API_KEY = "56b7eb668e9baf87aa7ccc1eefd561e9";

export default class extends React.Component {
  state= {
    isLoading: true
  };

  //날씨정보
  getWeather = async(latitude, longitude) => {
    //http통신
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    //데이터 콘솔출력
    //console.log(data);
    this.setState({isLoading:false, temp: data.main.temp})
  };
  
  //위치정보
  getLocation = async() => {
    try{
      //throw Error();
      await Location.requestPermissionsAsync();
      const {coords: { latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({ isLoading: false});
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
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}   