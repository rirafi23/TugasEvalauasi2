import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Home from '../Component/Berita1'
import Kedua from '../Component/Berita2'
import HomeHome from '../Component/Home'
import Profile from '../Component/Profile'

const AppTabNavigator = createMaterialTopTabNavigator({
  Beranda1:{
    screen:HomeHome,
  },
    Beranda2:{
    screen:Profile,
  }
})
const AppPageBeranda = createStackNavigator({
  rootBeranda:{
    screen:AppTabNavigator,
    navigationOptions: ()=>({
        header: null,
      }),
    
  },
    Berita1:{
    screen:Home,
    navigationOptions: () => ({
        title:'Portal News'
      }),
    
  },
    Berita2:{
    screen:Kedua,
    navigationOptions: () => ({
        title:'7 Situs Berita'
      }),
  }
})

const Beranda= createAppContainer(AppPageBeranda)
export default Beranda;