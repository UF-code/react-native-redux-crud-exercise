import React from 'react'
import { Navigation } from './src/navigation'

// Redux
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

// React Native Paper
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </ReduxProvider>
  )
}
