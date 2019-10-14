import React from 'react';
import {Text, View, StyleSheet, Dimension} from 'react-native';

const AssignmentDetail= ()=>{
    return(
        <View>
            style={styles.image}
        </View>
    );
};
const styles= StyleSheet.create({
    image:{
        height: (Math.round(Dimensions.get('window'.height)) / 2),
        width: (Math.round(Dimension.get('window').height) / 2),
        backgroundColor: `rgb(256, 0, 0)`
    }
});

export default AssignmentDetail;
