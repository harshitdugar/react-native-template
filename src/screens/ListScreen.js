import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen =() => { // The function which will be actually exported to App.js and viewed
    const friends= [
        {name: 'Harshit', age: 21},
        {name: 'Satweek', age: 22},
        {name: 'Kunal', age: 22},
        {name: 'Vatsal', age: 22},
        {name: 'Mohit', age: 22}
    ];
    return (
        
            <FlatList  // FlatLine starts. Takes two props: data and renderItem
                keyExtractor= {(friends)=>  // keyExtractor starts. This dynamically assigns key value on run time. Not pre assigned 
                    friends.name
                } // keyExtractor ends
                data= {friends}  // data props of the FlatList Element
                renderItem={({item}) => {  //renderItem starts. Accept each "item" to turn into viewable component
                    return <Text style={styles.text}>{item.name} - Age: {item.age}</Text>  // returning jsx version of the each array element
                }} // renderItem ends
            /> 
        
    );
}; // ListScreen Ends

const styles = StyleSheet.create({ 
    text:{
        fontSize: 30,
        marginVertical: 50,
        marginHorizontal: 50
    }
});

export default ListScreen;