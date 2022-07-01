import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Components
import { TableComponent } from '../components/table.component'

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
