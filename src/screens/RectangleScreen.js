import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
//import Rectangle from '../components/Rectangle';
const RectangleScreen=()=>{
    const [color, setColor]= useState(`rgb(255, 0, 0)`);
    const screenWidth = Math.round(Dimensions.get('window').width / 2);
    const screenHeight= Math.round(Dimensions.get('window').height / 2);
    console.log(screenHeight);
    console.log(screenWidth);
    return(
        <View>
            <View 
                style={{
                    height: Math.round(screenWidth),
                    width: Math.round(screenWidth),
                    top: Math.round(screenHeight/ 2),
                    bottom: Math.round(screenHeight / 2),
                    left: Math.round(screenWidth/ 2),
                    right: Math.round(screenWidth / 2),
                    backgroundColor: color
                }}/>
                <Button
                    title= "Press"
                    onPress={()=>{
                        setColor(color= `rgb(0, 255, 0)`)
                    }}
                />
        </View>
    );
};

const styles= StyleSheet.create({
    text:{
        fontSize: 20
    }
});

export default RectangleScreen;