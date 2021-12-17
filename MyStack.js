import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ScreenTwo from './ScreenTwo';
import ScreenThird from './ScreenThird';
import ScreenForth from './ScreenForth';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Screen2" component={ScreenTwo} />
        <Stack.Screen name="Screen3" component={ScreenThird} />
        <Stack.Screen name="Screen4" component={ScreenForth} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;