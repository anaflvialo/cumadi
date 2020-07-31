import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './pages/Login';
import Index from './pages/Index';
import News from './pages/News';
import CompleteNews from './pages/CompleteNews';
import Bot from './pages/Bot';

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator(
    {
        Início: {
            screen: Index,
            navigationOptions: () => ({
                tabBarIcon: ({focused}) => (
                    <Icon name='home' size={20} color={'#fff'} />
                ),
            }),
        },
        Chat: {
            screen: Bot,
            navigationOptions: () => ({
                tabBarIcon: ({focused}) => (
                    <Icon name='comments' size={20} color={'#fff'} />
                ),
            }),
        },
        Notícias: {
            screen: News,
            navigationOptions: () => ({
                tabBarIcon: ({focused}) => (
                    <Icon name='newspaper-o' size={20} color={'#fff'} />
                ),
            }),
        },
        
    },
    {
        barStyle: {
            backgroundColor: '#42d5ff',
        },
    },

);

const Switch = createSwitchNavigator({
    News,
    CompleteNews
});


const Routes = createAppContainer(
    createStackNavigator({
        Login:Tab,
        Index:Tab,
        News:Tab,
        CompleteNews
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    })
);

export default Routes;