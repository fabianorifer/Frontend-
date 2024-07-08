import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import SensorScreen from './src/SensorScreen';
import AboutUsScreen from './src/AboutUsScreen'; 
import * as ScreenOrientation from 'expo-screen-orientation';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = ({ setIsLoggedIn }) => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login">
      {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
    </Stack.Screen>
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const AppTabs = ({ setIsLoggedIn }) => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home">
      {props => <HomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
    </Tab.Screen>
    <Tab.Screen name="Sensor" component={SensorScreen} />
    <Tab.Screen name="AboutUs" component={AboutUsScreen} /> 
  </Tab.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const subscribeToOrientationChanges = async () => {
      try {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
      } catch (error) {
        console.log('Error locking orientation: ', error);
      }
    };

    subscribeToOrientationChanges();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppTabs setIsLoggedIn={setIsLoggedIn} /> : <AuthStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
  );
};

export default App;
