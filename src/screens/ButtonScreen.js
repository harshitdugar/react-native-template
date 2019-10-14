import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ButtonScreen= () => {
    return (
        <View>
            <Button
                onPress= {()=> console.log("pressed")}
                title= "Button"
            />
        </View>
    );
};

const styles = StyleSheet.create=({

});

export default ButtonScreen;

