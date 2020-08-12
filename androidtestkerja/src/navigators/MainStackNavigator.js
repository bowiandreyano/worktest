import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home'

const MainStack = createStackNavigator();

export default function MainStackNavigator() {

  return (
          <MainStack.Navigator>
            <MainStack.Screen name={'Home'} 
                component={HomeScreen} 
                options={{
                  title: 'Home',
                }}
            /> 
        </MainStack.Navigator>
  )
}