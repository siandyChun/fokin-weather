import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Weather({temp}) {
    return (
    //<View style={styles.container}>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <StatusBar barStyle="light- " />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={100} color= "white"/>
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        
        <View style={styles.halfContainer}></View>
    </LinearGradient>
    //</View>
    );
};

Weather.propTypes = {
    
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash", 
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ])

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temp: {
        fontSize: 30,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})  