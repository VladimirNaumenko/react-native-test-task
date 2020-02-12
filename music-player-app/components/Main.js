import React from 'react';
import List from "./List";
import Player from "./Player";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const Stack= createStackNavigator()
const TabNavigation = createBottomTabNavigator({
        List: {
            screen: List,
            navigationOptions: {
                title: "PlayList"
            }
        },
    Player: {
        screen: Player,
        navigationOptions: {
            title: "Player"
        }
    },
})
const Wrapper = createAppContainer(TabNavigation);


 function Main() {
    return (
<Wrapper/>
    );
}
export default Main
