import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen =()=>{
    const[red, setRed]= useState(0);
    const[green, setGreen]= useState(0);
    const[blue, setBlue]= useState(0);
    const COLOR_INCREMENT= 20;
    const COLOR_DECREMENT= 10;
    //const color_array= [red, green, blue];
    //console.log(color_array);
    const setColor= (color, change)=>{
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 
                ? null 
                : setRed(red +  change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 
                ? null
                : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 
                ? null 
                : setBlue(blue + change); 
            default:
                return; 
        }
    };
    return(
        <View>
            <ColorCounter
                color="Red"
                onIncrease={()=>{
                    setColor('red' , COLOR_INCREMENT);
                }}
                onDecrease={()=>{
                    setColor('red' , -1 * COLOR_DECREMENT);
                }}
            />
            <ColorCounter
                color="Green"
                onIncrease={()=>{
                    setColor('green', COLOR_INCREMENT);
                }}
                onDecrease={()=>{
                    setColor('green', -1 * COLOR_DECREMENT);
                }}
            />
            <ColorCounter
                color="Blue"
                onIncrease={()=>{
                    setColor('blue', COLOR_INCREMENT);
                }}
                onDecrease={()=>{
                    setColor('blue', -1 * COLOR_DECREMENT);
                }}
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
            <Text>The current value is {`rgb(${red}, ${green}, ${blue})`}</Text>
        </View>
    );
};

const styles= StyleSheet.create({

})

export default SquareScreen;