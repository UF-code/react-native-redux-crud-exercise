import React from 'react'

//
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './app.navigator'

//
import { SafeArea } from '../styled-components/safe-area.component'

export const Navigation = () => {
  return (
    <SafeArea>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeArea>
  )
}
