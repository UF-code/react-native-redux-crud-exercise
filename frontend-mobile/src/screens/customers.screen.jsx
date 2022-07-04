import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

// Components
import { TableComponent } from '../components/table.component'

// Styled Components
import { AddButtonComponent } from '../styled-components/button.component'

// Redux
import { useDispatch } from 'react-redux'
import { getCustomers } from '../../redux/customerSlice'

// Axios
import axios from '../../axios/axios'

export const CustomersScreen = () => {
  const dispatch = useDispatch()

  axios
    .get('/getAllCustomers')
    .then((response) => {
      dispatch(getCustomers(response.data))
    })
    .catch((err) => console.log(err))

  return (
    <View style={styles.container}>
      <TableComponent />

      <AddButtonComponent
        icon='account-plus'
        color='pink'
        mode='contained-tonal'
        onPress={() => {
          console.log('first')
        }}
      >
        Add New Customer
      </AddButtonComponent>
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
