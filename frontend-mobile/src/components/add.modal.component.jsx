import React, { useState } from 'react'
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper'

import { ModalComponent, ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent, ViewScreenComponent } from '../styled-components/view.component'

// Redux
// import { useDispatch } from 'react-redux'
// import { addUser } from '../../redux/usersSlice'
// import { useSelector } from 'react-redux'

export const AddModalComponent = (props) => {
  // const dispatch = useDispatch()
  // const users = useSelector((state) => state.users.users)
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  const [userFirst, setUserFirst] = useState('')
  const [userLast, setUserLast] = useState('')
  const [userAge, setUserAge] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const cleanUser = () => {
    setUserFirst('')
    setUserLast('')
    setUserAge('')
    setUserEmail('')
  }

  return (
    <Modal visible={props.show} onDismiss={props.onClose} contentContainerStyle={containerStyle}>
      <ModalTextInputComponent
        label='First Name'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={userFirst}
        onChangeText={(first) => setUserFirst(first)}
      />
      <ModalTextInputComponent
        label='Last Name'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={userLast}
        onChangeText={(last) => setUserLast(last)}
      />
      <ModalTextInputComponent
        label='Age'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={userAge}
        onChangeText={(age) => setUserAge(age)}
      />
      <ModalTextInputComponent
        label='Email'
        mode='outlined'
        outlineColor='pink'
        activeOutlineColor='pink'
        value={userEmail}
        onChangeText={(email) => setUserEmail(email)}
      />

      <ViewButtonComponent>
        <ButtonComponent
          icon='account-check'
          color='pink'
          mode='contained-tonal'
          onPress={() => {
            // dispatch(addUser(user_template))
            console.log(`${userFirst} ${userLast} ${userAge} ${userEmail}`)
            props.onClose()
            cleanUser()
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
            cleanUser()
          }}
        >
          Cancel
        </ButtonComponent>
      </ViewButtonComponent>
    </Modal>
  )
}
