import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUsScreen from '../screens/ContactUsScreen';
import HomeScreen from '../screens/HomeScreen';
import ReloadedScreen from '../screens/ReloadedScreen';
import RequestScreen from '../screens/RequestScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent'
import Colors from '../res/Colors';
const Drawer = createDrawerNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <DrawerContent {...props} />}
                drawerContentOptions={{backgroundColor: Colors.bgColor,}}
                >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Request" component={RequestScreen} />
                <Drawer.Screen name="Reloaded" component={ReloadedScreen} />
                <Drawer.Screen name="Contact" component={ContactUsScreen} />

            </Drawer.Navigator>

        </NavigationContainer>
    );
}