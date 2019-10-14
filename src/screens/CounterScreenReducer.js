import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer=(state, action)=> {
    // type=== {count: number}
    // action === {type: 'increase', 'decrement', payload: 1}
    switch(action.type){
        case 'increase':
            return{...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count + action.payload};
        default:
            return state;
    }
};

const CounterScreenReducer = ()=> {
    const[state, dispatch] = useReducer(reducer, {count: 0} );
    const counter= state;
    return (
        <View>
            <Button
                title= "Increase by 1"
                onPress={()=>{
                    dispatch({type: 'increase', payload: 1});
                }}
            />
            <Button
                title="Decrease by 1"
                onPress={()=>{
                    dispatch({type: 'decrease', payload: -1});
                }}
            />
            <Text style= {styles.text}>The current value is: {state.count} </Text>
        </View>
    );
};

const styles= StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'red'
    }
})

export default CounterScreenReducer;
