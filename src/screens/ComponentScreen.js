import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>{
    return (
            <View>
            <Text style={styles.textStyle}>Hello</Text>
            <Text style={styles.textStyle}>Hello Hello</Text>
            <Text style={styles.textStyle}>Hello Hello Hello</Text>
            <Text style={styles.textStyle}>Hello Hello Hello Hello</Text>
            </View>
        );
};

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 40
    }
});

export default ComponentScreen;