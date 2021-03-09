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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Slider from '@react-native-community/slider'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <RateForm />
          <TasteSlider />
          <BodySlider />
          <Flavor />
        </View>
      </SafeAreaView>
    </>
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
          <Text style={styles.sliderText}>酸味</Text>
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
          <Text style={styles.sliderText}>苦味</Text>
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
          <Text style={styles.sliderText}>ライト</Text>
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
          <Text style={styles.sliderText}>フル</Text>
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
      <Text style={styles.formTitle}>全体評価</Text>
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

type RateStarProps = {|
  id: number,
  currentRate: number,
  onPressed: (id: number, enabled: boolean) => void,
|}

const RateStar = (props: RateStarProps) => {
  const enabled = useMemo(() => {
    return props.currentRate >= props.id
  }, [props.currentRate])
  const onPress = useCallback(() => {
    props.onPressed(props.id, !enabled)
  }, [])
  return (
    <View style={styles.rateStar}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="star"
          color={enabled ? '#000' : '#ccc'}
          size={42}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  rateForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginBottom: 4,
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
