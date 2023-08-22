import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, GetStarted, Register, Login } from '../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash" >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})