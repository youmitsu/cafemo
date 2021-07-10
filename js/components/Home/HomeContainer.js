// @flow

import React from 'react'
import { useCallback } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
} from 'react-native'


export const HomeContainer = ({ navigation } : { navigation: any }) => {

  const navigateForm = useCallback(() => {
    navigation.push('Form')
  }, [navigation])

  const navigateFlatList = useCallback(() => {
    navigation.push('FlatList')
  }, [navigation])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.listContainer}/>
        <View style={styles.button}>
          <Button
            title="LET'S CAPPING!"
            onPress={navigateForm}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="LET'S FlatList!"
            onPress={navigateFlatList}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  listContainer: {
    backgroundColor: '#000'
  },
  button: {
    marginVertical: 4,
  }
})