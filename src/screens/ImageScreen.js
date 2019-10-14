import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetails';
const ImageScreen = ()=>{
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                location={require('../../assets/forest.jpg')} 
                imageScore= {9}
            />
            <ImageDetail 
                title="Beach" 
                location={require('../../assets/beach.jpg')} 
                imageScore={10}
            />
            <ImageDetail 
                title="Mountain" 
                location={require('../../assets/mountain.jpg')} 
                imageScore={9.5}
            />
        </View>
    );
};

const styles= StyleSheet.create({});

export default ImageScreen;