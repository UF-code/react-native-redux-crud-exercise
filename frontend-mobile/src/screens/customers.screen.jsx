import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

// Components
import { TableComponent } from '../components/table.component'
import { AddModalComponent } from '../components/add.modal.component'

// Styled Components
import { ButtonComponent } from '../styled-components/button.component'

// Redux
import { useDispatch } from 'react-redux'
import { getCustomers } from '../../redux/customerSlice'

// Axios
import axios from '../../axios/axios'

export const CustomersScreen = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  axios
    .get('/getAllCustomers')
    .then((response) => {
      dispatch(getCustomers(response.data))
    })
    .catch((err) => console.log(err))

  return (
    <View style={styles.container}>
      <TableComponent />

      <ButtonComponent
        icon='account-plus'
        color='pink'
        mode='contained-tonal'
        onPress={() => {
          setShow(true)
        }}
      >
        Add New Customer
      </ButtonComponent>

      <AddModalComponent show={show} onClose={() => setShow(false)} />
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
