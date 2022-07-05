import React, { useState } from 'react'
import { Modal } from 'react-native-paper'

import { ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent } from '../styled-components/view.component'

// Axios
import axios from '../../axios/axios'

// Redux
import { useDispatch } from 'react-redux'
import { addCustomers } from '../../redux/customerSlice'

export const AddModalComponent = (props) => {
  const dispatch = useDispatch()
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  const [customerFirst, setCustomerFirst] = useState('')
  const [customerLast, setCustomerLast] = useState('')
  const [customerBirthDate, setCustomerBirthDate] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')

  const handleNameChange = (value) => setCustomerFirst(value)
  const handleLastChange = (value) => setCustomerLast(value)
  const handleEmailChange = (value) => setCustomerEmail(value)
  const handleBirthChange = (value) => setCustomerBirthDate(value)

  const cleanCustomer = () => {
    setCustomerFirst('')
    setCustomerLast('')
    setCustomerEmail('')
    setCustomerBirthDate('')
  }

  const addNewCustomer = () => {
    axios
      .post('/addCustomer', {
        first_name: customerFirst,
        last_name: customerLast,
        email: customerEmail,
        birthdate: new Date(customerBirthDate),
      })
      .then((response) => {
        dispatch(addCustomers(response.data))
        cleanCustomer()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Modal visible={props.show} onDismiss={props.onClose} contentContainerStyle={containerStyle}>
      <ModalTextInputComponent
        label='First Name'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={customerFirst}
        onChangeText={handleNameChange}
      />
      <ModalTextInputComponent
        label='Last Name'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={customerLast}
        onChangeText={handleLastChange}
      />
      <ModalTextInputComponent
        label='Email'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={customerEmail}
        onChangeText={handleEmailChange}
      />
      <ModalTextInputComponent
        label='Birthdate'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={customerBirthDate}
        onChangeText={handleBirthChange}
      />

      <ViewButtonComponent>
        <ButtonComponent
          icon='account-check'
          color='pink'
          mode='contained-tonal'
          onPress={() => {
            console.log(
              `${customerFirst} ${customerLast} ${new Date(customerBirthDate)} ${customerEmail}`
            )
            addNewCustomer()
            props.onClose()
            cleanCustomer()
          }}
        >
          Add New User
        </ButtonComponent>

        <ButtonComponent
          icon='account-remove'
          color='pink'
          mode='contained-tonal'
          onPress={() => {
            props.onClose()
            cleanCustomer()
          }}
        >
          Cancel
        </ButtonComponent>
      </ViewButtonComponent>
    </Modal>
  )
}
