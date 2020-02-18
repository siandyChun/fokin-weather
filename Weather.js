import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName: "weather-lightning-rainy",
        gradient: ['#70e1f5', '#ffd194'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ['#7f7fd5', '#91eae4'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ['#dd3e54', '#6be585'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ['#544a7d', '#ffd452'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Atmosphere : {
        iconName: "weather-sunny",
        gradient: ['#005aa7', '#fffde4'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ['#00b4db', '#0083b0'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Smoke : {
        iconName: "weather-fog",
        gradient: ['#59c173', 'fa17fe0'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Haze : {
        iconName: "weather-hail",
        gradient: ['#654ea3', '#eaafc8'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Dust : {
        iconName: "weather-fog",
        gradient: ['#009fff', '#ec2f4b'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Fog : {
        iconName: "weather-fog",
        gradient: ['#8360c3', '#2ebf91'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Sand : {
        iconName: "weather-windy",
        gradient: ['#dd3e54', '#6be585'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Ash : {
        iconName: "waves",
        gradient: ['#659999', '#f4791f'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    }, 
    Squall : {
        iconName: "weather-windy-variant",
        gradient: ['#c31432', '#240b36'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Tornado : {
        iconName: "weather-hurricane",
        gradient: ['#f953c6', '#b91d73'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Clear : { 
        iconName: "weather-sunny",
        gradient: ['#1f4037', '#99f2c8'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    },
    Clouds : {
        iconName: "weather-cloudy",
        gradient: ['#373b44', '#4286f4'],
        title: "Atmosphere",
        subtitle: "날씨가 무드 있으니 나가볼까요?? 데이트??"
    }
}



export default function Weather({ temp, condition }) {
    return (
    //<View style={styles.container}>
    <LinearGradient 
        colors={weatherOptions["Atmosphere"].gradient} 
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />

        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions["Atmosphere"].iconName} 
                size={100} 
                color= "white"
            />
            <Text style={styles.temp}>{temp}℃</Text>
        </View> 
        
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
    <Text style ={styles.title}>{weatherOptions["Atmosphere"].title}</Text>
    <Text style ={styles.subTitle}>{weatherOptions["Atmosphere"].subtitle}</Text>     
        </View>
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

    temp: {
        fontSize: 30,
        color: "white"
    },
    
    title: {
        color: "#ffffff",
        fontSize: 35,
        fontWeight: "300",
        marginBottom: 10
    },

    subTitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "600"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})  