import * as React from 'react';
import {createDrawerNavigator} from 'react-native-drawer';
import AppTabNavigator from './AppTabNavigator';
import CustomSideBarMenu from './customSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:"Home"
    }
)