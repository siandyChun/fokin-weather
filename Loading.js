import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


// 로딩 패이지
export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the Fucking Weather</Text>
    </View>
}


// 스타일
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal : 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },

    text : {
        color: '#3B5A82',
        fontSize: 30,
        fontWeight: "bold"
    }
}); 