import React, { Component } from 'react';
import Menu from './Menucomponent';
//import { DISHES } from '../shared/dishes';
import Dishdetail from './Dishdetailcomponent';
import {View,Platform } from 'react-native';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Homecomponent';
const MenuNavigator = createStackNavigator({
   Menu: { screen: Menu },
   Dishdetail: { screen: Dishdetail }

},{
 initialRouteName: 'Menu', 
 navigationOptions: {
     headerStyle: {
         backgroundColor: '#512DA8'

     },
    headerTintColor: '#fff',
    headerTitleStyle:{
       color: '#fff' 
    } 
 }  
});

const Homecomponent = createStackNavigator({
    Home: { screen:Home }

}, {
    
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const Container = createAppContainer(MenuNavigator);


class Main extends Component{
    
    render(){
        return(
            <View style={{flex:1, paddingTop: Platform.OS=== 'ios'? 0 : Expo.Constants.statusBarHeight}}>
            <Container/>
            </View>
        );
    }
    
}
export default Main;