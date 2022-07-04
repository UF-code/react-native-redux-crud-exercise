import React, { useState } from 'react'
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper'

import { Button as But } from 'react-native'
import DatePicker from 'react-native-datepicker'

import { ModalComponent, ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent, ViewScreenComponent } from '../styled-components/view.component'

// Axios
import axios from '../../axios/axios'

// Redux
import { useDispatch } from 'react-redux'
import { addCustomer } from '../../redux/customerSlice'

export const AddModalComponent = (props) => {
  const dispatch = useDispatch()
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  const [dated, setDated] = useState(new Date())

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
        birthdate: customerBirthDate,
      })
      .then((response) => {
        dispatch(addCustomer(response.data))
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

      {/* <DatePicker date={date} onDateChange={setDate} /> */}

      <DatePicker
        style={{ width: 200 }}
        date={dated}
        mode='date'
        placeholder='select date'
        format='YYYY-MM-DD'
        minDate='2016-05-01'
        maxDate='2016-06-01'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={setDated(dated)}
      />

      <ViewButtonComponent>
        <ButtonComponent
          icon='account-check'
          color='pink'
          mode='contained-tonal'
          onPress={() => {
            console.log(`${customerFirst} ${customerLast} ${customerBirthDate} ${customerEmail}`)
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
