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
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

type RateStarProps = {|
  id: number,
  currentRate: number,
  onPressed: (id: number, enabled: boolean) => void,
|}

export const RateStar = (props: RateStarProps) => {
  const enabled = useMemo(() => {
    return props.currentRate >= props.id
  }, [props.currentRate])
  const onPress = useCallback(() => {
    props.onPressed(props.id, !enabled)
  }, [])
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name="star"
        color={enabled ? '#000' : '#ccc'}
        size={42}
      />
    </TouchableOpacity>
  )
}