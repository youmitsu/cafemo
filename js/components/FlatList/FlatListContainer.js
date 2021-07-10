// @flow

import React from 'react'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
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
  Dimensions,
  FlatList,
} from 'react-native'
import ActionButton from 'react-native-action-button'

import uuid from 'react-native-uuid';

type Item = {|
  id: string,
  name: string
|}

type Hooks = {|
  items: Array<Item>,
|}

type _FlatList = typeof FlatList

const useItems = (onInserted: () => void): Hooks => {
  const [items, setItems] = useState<Array<Item>>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const item: Item = {
        id: uuid.v4(),
        name: "hoge",
      }
      const newItems = [...items, item]
      setItems(newItems)
      onInserted()
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [items, onInserted])

  return {
    items,
  }
}

type ScrollMode = {|
  state: 'auto' | 'stop'
|}

export const FlatListContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const [scrollMode, setScrollMode] = useState('auto')
  const [componentHeight, setComponentHeight] = useState(0)

  const onInserted = useCallback(() => {
    if (scrollMode === 'auto') {
      ref.current?.scrollToEnd({
        animated: true,
      })
    }
  }, [scrollMode])
  const { items } = useItems(onInserted)

  const onPressButton = useCallback(() => {
    ref.current?.scrollToEnd({
      animated: true,
    })
  }, [ref.current])

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          {item.id}
        </Text>
      </View>
    )
  }

  const updateIndex = useCallback(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index || 0)
  }, [setCurrentIndex])

  const onLayout = useCallback((e: any) => {
    setComponentHeight(e.nativeEvent.layout.height)
  }, [setComponentHeight])

  const onScroll = useCallback((e: any) => {
    const contentHeight = e.nativeEvent.contentSize.height
    const offsetY = e.nativeEvent.contentOffset.y
    if (contentHeight - offsetY <= componentHeight + 10) {
      setScrollMode('auto')
    }
  }, [setScrollMode, componentHeight])

  const onMomenthumScrollBegin = useCallback(() => {
    setScrollMode('stop')
  }, [setScrollMode])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            ref={ref}
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onLayout={onLayout}
            onScroll={onScroll}
            onScrollBeginDrag={onMomenthumScrollBegin}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
      <ActionButton
        size={scrollMode === 'auto' ? 0 : 56}
        buttonColor="rgba(231,76,60,1)"
        onPress={onPressButton}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginVertical: 5,
    padding: 16,
    justifyContent: 'flex-end',
  },
  itemContainer: {
    backgroundColor: '#333',
    marginHorizontal: 30,
    marginVertical: 5,
    padding: 16,
  },
  itemEmptyContainer: {
    backgroundColor: '#333',
    marginVertical: 4,
    height: 20,
    padding: 5,
  },
  itemText: {
    color: '#fff',
  },
})