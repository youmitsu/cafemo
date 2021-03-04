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
        </View>
      </SafeAreaView>
    </>
  )
}

const TasteSlider = () => {
  return (
    <View style={styles.flavorSlider}>
      <View style={styles.sliderText}>
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
      <View style={styles.sliderText}>
        <Text>苦味</Text>
      </View>
    </View>
  )
}

const BodySlider = () => {
  return (
    <View style={styles.flavorSlider}>
      <View style={styles.sliderText}>
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
      <View style={styles.sliderText}>
        <Text>フル</Text>
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
    <View style={styles.rateForm}>
      <RateStar id={1} currentRate={rate} onPressed={onPressed}/>
      <RateStar id={2} currentRate={rate} onPressed={onPressed}/>
      <RateStar id={3} currentRate={rate} onPressed={onPressed}/>
      <RateStar id={4} currentRate={rate} onPressed={onPressed}/>
      <RateStar id={5} currentRate={rate} onPressed={onPressed}/>
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
          size={50}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
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
    marginTop: 12,
  },
  sliderText: {
    width: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
})

export default App
