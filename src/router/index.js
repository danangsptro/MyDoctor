import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, GetStarted, Register, Login, UploadPhoto, Doctor, Messages, Hospitals } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from './Navigation';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator{...props} />} >
            <Tab.Screen name="Doctor" component={Doctor} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Hospitals" component={Hospitals} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator initialRouteName="Splash" >
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
                <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;