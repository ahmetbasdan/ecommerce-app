import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import BottomtabNavigation from './BottomtabNavigation';
import Header from '../components/Header';
import ProductDetail from '../screens/productDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
    header: (props) => <Header />,
    animation: "slide_from_right"
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={BottomtabNavigation} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation