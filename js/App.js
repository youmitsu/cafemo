/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
} from 'react-native'

import { RateStar } from './components//atoms/RateStar'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Slider from '@react-native-community/slider'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <NameForm />
            <RoastSlider />
            <AromaForm />
            <Flavor />
            <RateForm />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const NameForm = () => {
  const [input, setInput] = useState('')
  const onTextInput = useCallback((text: string) => {
    setInput(text)
  }, [])
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>サンプル</Text>
      <TextInput
        style={styles.flavorTextInput}
        onChangeText={onTextInput}
        value={input}
      />
    </View>
  )
}

const RoastSlider = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>ロースト</Text>
      <View style={styles.flavorSlider}>
        <View style={styles.sliderTextView}>
          <Text>浅</Text>
        </View>
        <Slider
          style={{width: "75%", height: 40}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={0.1}
        />
        <View style={styles.sliderTextView}>
          <Text>深</Text>
        </View>
      </View>
    </View>
  )
}

const AromaForm = () => {
  const [input, setInput] = useState('')
  const onTextInput = useCallback((text: string) => {
    setInput(text)
  }, [])
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>アロマ</Text>
      <Text style={styles.subFormTitle}>ドライ</Text>
      <View style={styles.flavorSlider}>
        <Slider
          style={{width: "100%", height: 40}}
          minimumValue={0}
          maximumValue={3}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={1}
        />
      </View>
      <Text style={styles.subFormTitle}>クラスト</Text>
      <View style={styles.flavorSlider}>
        <Slider
          style={{width: "100%", height: 40}}
          minimumValue={0}
          maximumValue={3}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={1}
        />
      </View>
      <Text style={styles.subFormTitle}>ブレーク</Text>
      <View style={styles.flavorSlider}>
        <Slider
          style={{width: "100%", height: 40}}
          minimumValue={0}
          maximumValue={3}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={1}
        />
      </View>
      <Text style={styles.formTitle}>メモ</Text>
      <TextInput
        style={styles.flavorTextInput}
        onChangeText={onTextInput}
        value={input}
      />
    </View>
  )
}

const Flavor = () => {
  const [input, setInput] = useState('')
  const onTextInput = useCallback((text: string) => {
    setInput(text)
  }, [])
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>フレーバー</Text>
      <Slider
        style={{width: "100%", height: 40}}
        minimumValue={0}
        maximumValue={8}
        thumbTintColor="#000"
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
      />
      <Text style={styles.formTitle}>後味の印象度</Text>
      <Slider
        style={{width: "100%", height: 40}}
        minimumValue={0}
        maximumValue={8}
        thumbTintColor="#000"
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
      />
      <Text style={styles.formTitle}>メモ</Text>
      <TextInput
        style={styles.flavorTextInput}
        onChangeText={onTextInput}
        value={input}
      />
    </View>
  )
}

const TasteSlider = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>テイストバランス</Text>
      <View style={styles.flavorSlider}>
        <View style={styles.sliderTextView}>
          <Text>酸味</Text>
        </View>
        <Slider
          style={{width: "75%", height: 40}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={0.1}
        />
        <View style={styles.sliderTextView}>
          <Text>苦味</Text>
        </View>
      </View>
    </View>
  )
}

const BodySlider = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>ボディ</Text>
      <View style={styles.flavorSlider}>
        <View style={styles.sliderTextView}>
          <Text>ライト</Text>
        </View>
        <Slider
          style={{width: "75%", height: 40}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="#000"
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          step={0.1}
        />
        <View style={styles.sliderTextView}>
          <Text>フル</Text>
        </View>
      </View>
    </View>
  )
}

const RateForm = () => {
  const [rate, setRate] = useState(0)
  const onPressed = useCallback(
    (rate: number, enabled: boolean) => {
      setRate(enabled ? rate : rate - 1)
    }, [])
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>総合評価</Text>
      <View style={styles.rateForm}>
        <RateStar id={1} currentRate={rate} onPressed={onPressed}/>
        <RateStar id={2} currentRate={rate} onPressed={onPressed}/>
        <RateStar id={3} currentRate={rate} onPressed={onPressed}/>
        <RateStar id={4} currentRate={rate} onPressed={onPressed}/>
        <RateStar id={5} currentRate={rate} onPressed={onPressed}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  formContainer: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 26,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e2e2',
  },
  rateForm: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 8,
  },
  flavorSlider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sliderTextView: {
    width: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  slideText: {
    fontSize: 12,
  },
  formTitle: {
    marginBottom: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
  subFormTitle : {
    fontSize: 15,
    fontWeight: "bold",
  },
  flavorTextInput: {
    width: "100%",
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
})

export default App
