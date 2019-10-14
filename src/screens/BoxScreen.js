import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> Child #1 </Text>
            <Text style={styles.textTwoStyle}> Child #2 </Text>
            <Text style={styles.textThreeStyle}> Child #3 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        //alignItems: 'center', // 'flex-start'|| 'flex-end'. 'stretch' is default
        //flexDirection: 'row', // 'column' is DEFAULT
        height: 200,
        //justifyContent: 'space-around'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 10
    },
    textTwoStyle:{
        borderWidth: 1,
        borderColor: 'red',
        margin: 10,
        flex: 1
    },
    textThreeStyle:{
        borderWidth: 1,
        borderColor: 'red',
        margin: 10
    }
});

export default BoxScreen;