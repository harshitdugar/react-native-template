import React, {useState} from 'react';
import {FlatList, View, Button, StyleSheet, Text} from 'react-native';

const ColorScreen =()=>{
    const[colors, setColors]= useState([]);  // Colors array initialsed
    //console.log(colors); // to see array elements in console
    return(
        <View>
            <Button
                title= "Add a colour"
                onPress= {()=>{
                    setColors([...colors, randomRgb()]); //setColor updating the array by taking element generatred by randomRgb function
                }}
            />
            <FlatList
                keyExtractor= {item=> item} // identifier
                data={colors} // data set to colors array
                renderItem={({item})=> { //item is an element of colors array 
                    return <View style={{height: 100, width: 100, backgroundColor: item}} /> // returning blocks of color
                }} // renderItem ends
            /> 
        </View>
    ); // Return statement ends
}; // ColorScreen ends

const randomRgb = () =>{ //randomRgb function starts
    const red= Math.floor(Math.random() * 256); // gives any number between 0 and 250
    const green= Math.floor(Math.random() * 256);
    const blue= Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; // rbg is a Js specific return type `` are used to return a string value
}

const styles= StyleSheet.create({

});

export default ColorScreen;