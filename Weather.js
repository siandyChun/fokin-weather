import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Weather({temp}) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={100}/>
        <Text style={styles.temp}>{temp}℃</Text>
        </View>

        <View style={styles.halfContainer}></View>

    </View>
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
        fontSize: 30
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})  