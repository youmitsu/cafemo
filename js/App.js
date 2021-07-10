// @flow
import React from 'react'
import { useState, useCallback, useMemo } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Switch,
  TouchableOpacity,
  Button,
} from 'react-native'

import { RateStar } from './components//atoms/RateStar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider'

import { HomeContainer } from './components/Home/HomeContainer'
import { FormContainer } from './components/Form/FormContainer'
import { FlatListContainer } from './components/FlatList/FlatListContainer'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeContainer}/>
        <Stack.Screen name="Form" component={FormContainer}/>
        <Stack.Screen name="FlatList" component={FlatListContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})

export default App
