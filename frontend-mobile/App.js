import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

//
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

//
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style='auto' />
        </View>
      </PaperProvider>
    </ReduxProvider>
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
