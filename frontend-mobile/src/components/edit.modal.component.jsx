import React, { useState } from 'react'
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper'

import { ModalComponent, ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent, ViewScreenComponent } from '../styled-components/view.component'

// Redux
import { useSelector, useDispatch } from 'react-redux'
// import { addTmpCustomer } from '../../redux/customerSlice'

export const EditModalComponent = (props) => {
  const dispatch = useDispatch()
  const tmpCustomer = useSelector((state) => state.customers.tmpCustomer)
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  // console.log(tmpCustomer)
  const [customerFirst, setCustomerFirst] = useState(tmpCustomer.first_name)
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

  return (
    <Modal
      visible={props.show}
      onDismiss={() => {
        props.onClose()
        cleanCustomer()
      }}
      contentContainerStyle={containerStyle}
    >
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
            // dispatch(addUser(user_template))
            console.log(`${customerFirst} ${customerLast} ${customerBirthDate} ${customerEmail}`)
            props.onClose()
            cleanCustomer()
          }}
        >
          Edit User
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
