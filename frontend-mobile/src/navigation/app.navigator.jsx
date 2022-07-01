import React from 'react'

// Screens
import { CustomersScreen } from '../screens/customers.screen'
import { CreatorScreen } from '../screens/creator.screen'

// Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

// Icons
import { Ionicons } from '@expo/vector-icons'

const TAB_ICON = {
  Customers: 'md-person',
  Creator: 'md-information-circle',
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
    tabBarActiveTintColor: '#F15412',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: [{ display: 'flex' }, null],
    headerShown: false,
  }
}

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name='Customers' component={CustomersScreen} />
    <Tab.Screen name='Creator' component={CreatorScreen} />
  </Tab.Navigator>
)
