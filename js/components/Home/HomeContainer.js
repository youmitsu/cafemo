// @flow

import React from 'react'
import { useCallback } from 'react'
import {
  Button,
} from 'react-native'


export const HomeContainer = ({ navigation } : { navigation: any }) => {

  const navigateForm = useCallback(() => {
    navigation.push('Form')
  }, [navigation])

  return (
    <>
      <Button title="LET'S CAPPING!" onPress={navigateForm}></Button>
    </>
  )
}