import React, { useState } from 'react'
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper'

import { ModalComponent, ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent, ViewScreenComponent } from '../styled-components/view.component'

// Redux
// import { useDispatch } from 'react-redux'
// import { addUser } from '../../redux/usersSlice'
// import { useSelector } from 'react-redux'

export const EditModalComponent = (props) => {
  // const dispatch = useDispatch()
  // const users = useSelector((state) => state.users.users)
  const containerStyle = { backgroundColor: 'white', padding: 20 }

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
            // dispatch(addUser(user_template))
            console.log(`${customerFirst} ${customerLast} ${customerBirthDate} ${customerEmail}`)
            props.onClose()
            // cleanCustomer()
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
            // cleanCustomer()
          }}
        >
          Cancel
        </ButtonComponent>
      </ViewButtonComponent>
    </Modal>
  )
}
