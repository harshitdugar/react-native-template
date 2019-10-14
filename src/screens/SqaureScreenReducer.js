// SquareScreen but with a Reducer

import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer=(state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch(action.colorToChange){
        case 'red':
            // never going to change the value directly
            // state.red= state.red +15; // wrong code
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : {...state, red: state.red + action.amount }
            // ...state makes a brand new object and copy paste the existing objects of state and then override the red value to the new object 
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : {...state, green: state.green + action.amount }
        
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
                ? state
                : {...state, blue: state.blue + action.amount }
        default:
            return state;
    }
};

const SquareScreenReducer =()=>{
    // dispatch job is to run the reducer function which will change the value of state. useReducer will return the updated state value and React will re-render the component
    const[state, dispatch]= useReducer(reducer, { red: 0, green: 0, blue: 0 }); // Why reducer function is called before? Because initial value can be undefined and can't be left out. useReducer(reducer) is better than useReducer(reducer, undefined);
    const COLOR_AMOUNT= 15;
    const {red, green, blue }= state;
    return(
        <View>
            <ColorCounter
                color="Red"
                onIncrease={()=>{
                    dispatch({colorToChange: 'red', amount: COLOR_AMOUNT});
                }}
                onDecrease={()=>{
                    dispatch({colorToChange: 'red', amount: -1 * COLOR_AMOUNT});
                }}
            />
            <ColorCounter
                color="Green"
                onIncrease={()=>{
                    dispatch({colorToChange: 'green', amount: COLOR_AMOUNT});
                }}
                onDecrease={()=>{
                    dispatch({colorToChange: 'green', amount: -1 * COLOR_AMOUNT});
                }}
            />
            <ColorCounter
                color="Blue"
                onIncrease={()=>{
                    dispatch({colorToChange: 'blue', amount: COLOR_AMOUNT});
                }}
                onDecrease={()=>{
                    dispatch({colorToChange: 'blue', amount: -1 * COLOR_AMOUNT});
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

export default SquareScreenReducer;