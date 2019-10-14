// To check if a string is more than certain amount of letter and based on that condition
// validate some JSX

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen=()=>{
    const[password, setPassword]= useState('');
    return(
        <View>
            <Text> Enter Password</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize= "none"
            autoCorrect= {false}
            value={password}
            onChangeText={(newValue)=> setPassword(newValue)}
            />
            {password.length < 9 ? <Text style={styles.text}> Password must be at least 8 character</Text> : null }
        </View>
    );
};

const styles= StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    text:{
        color: 'red'
    }
});

export default TextScreen;