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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <RateForm />
        </View>
      </SafeAreaView>
    </>
  )
}

const RateForm = (props: Props) => {
  const [rate, setRate] = useState(0)
  const onPressed = useCallback(
    (rate: number, enabled: boolean) => {
      if (enabled) {
        setRate(rate)
      } else {
        setRate(rate - 1)
      }
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
  rateStar: {
  },
})

export default App
