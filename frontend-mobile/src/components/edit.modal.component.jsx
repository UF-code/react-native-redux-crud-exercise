import React, { useState } from 'react'
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper'

import { TextInput, StyleSheet } from 'react-native'

import { ModalComponent, ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent, ViewScreenComponent } from '../styled-components/view.component'

// Redux
// import { useSelector, useDispatch } from 'react-redux'
// import { addTmpCustomer } from '../../redux/customerSlice'

export const EditModalComponent = (props) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  // console.log(tmpCustomer)
  const [customerFirst, setCustomerFirst] = useState(props.data.first_name)
  const [customerLast, setCustomerLast] = useState(props.data.last_name)
  const [customerBirthDate, setCustomerBirthDate] = useState(props.data.birthdate)
  const [customerEmail, setCustomerEmail] = useState(props.data.email)

  const handleNameChange = (value) => setCustomerFirst(value)
  const handleLastChange = (value) => setCustomerLast(value)
  const handleEmailChange = (value) => setCustomerEmail(value)
  const handleBirthChange = (value) => setCustomerBirthDate(value)

  const cleanCustomer = () => {
    setCustomerFirst('')
    setCustomerLast('')
    setCustomerEmail('')
    setCustomerBirthDate('')
    // console.log('hey')
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
        label={'First Name'}
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        defaultValue={customerFirst}
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
          Edit User {props.cst_id}
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
