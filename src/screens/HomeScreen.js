import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {  //Taking only navigation object of the props instead of taking the entire props
  console.log("App successfully rendered. Welcome!");
  return( 
      <View style={styles.viewStyle}> 
        <Text style={styles.text}>Welcome</Text>
        <Button
          style={styles.buttonView}
          onPress= {()=> navigation.navigate('Component')}
          title= "Component"
        />
        <Button
          title="Image"
          onPress={()=> navigation.navigate('Image')}
        />
        <Button
          onPress= {()=> navigation.navigate('Counter')}
          title= "Counter"
        />
        <Button
          title="Colour App"
          onPress= {()=> navigation.navigate('Color')}
        />
        <Button
          title="Sqaure Screen"
          onPress={()=> navigation.navigate('Square')}
        />
        <Button
          title= "Square Screen Reducer"
          onPress={()=> navigation.navigate('SqReducer')}
        />
        <Button
          title= "Counter Screen Reducer"
          onPress={()=> navigation.navigate('CoRedux')}
        />
        <Button
          title= "Text Input"
          onPress={()=> navigation.navigate('Text')}
        />
        <Button
          title= "Layout"
          onPress={()=> navigation.navigate('Box')}
        />
        <Button
          title= "Style App"
          onPress={()=> navigation.navigate('Style')}
        />
        <Button
          title= "Rectangle"
          onPress={()=> navigation.navigate('Rectangle')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
    //color: red
  },
  viewStyle: {
    margin: 10
  },
  buttonView: {
    margin: 10
  }
});

export default HomeScreen;
