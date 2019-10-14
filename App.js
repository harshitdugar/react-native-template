import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
//import ListScreen from './src/screens/ListScreen';
//import ButtonScreen from './src/screens/ButtonScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenReducer from './src/screens/SqaureScreenReducer';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import StyleScreen from './src/screens/StyleScreen';
import RectangleScreen from './src/screens/RectangleScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Image: ImageScreen,
    //List: ListScreen,
    //Button: ButtonScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SqReducer: SquareScreenReducer,
    CoRedux: CounterScreenReducer,
    Text: TextScreen,
    Box: BoxScreen,
    Style: StyleScreen,
    Rectangle: RectangleScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native'
    }
  }
);

export default createAppContainer(navigator);
