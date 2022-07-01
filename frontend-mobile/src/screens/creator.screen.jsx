import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

export const CreatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>powered by UF-code</Text>
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
