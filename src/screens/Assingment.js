import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import AssingmentDetail from '../components/AssignmentDetail';

const Assignment= ()=>{
    return (
        <View>
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.text}>Hello Hello</Text>
            <Text style={styles.text}>Hello Hello Hello</Text>
            <Text style={styles.text}>Hello Hello Hello Hello</Text>
            <AssingmentDetail
                height= 
            />
        </View>
    );
};

const styles= StyleSheet.create({
    text:{
        fontSize: 30,
    }
});

export default Assignment;