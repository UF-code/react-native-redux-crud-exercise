import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export const CustomersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>I think we can!</Text>
      <Text>hehehe</Text>

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
