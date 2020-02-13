import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

export default function Weather({temp}) {
    return <View style={styles.container}>
        <Text>{temp}</Text>
    </View>
};

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    conditions:PropTypes.oneOf([ 
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
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
    ]).isRequired
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})  