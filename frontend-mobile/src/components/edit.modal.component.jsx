import React, { useState } from 'react'
import { Modal } from 'react-native-paper'

import { ModalTextInputComponent } from '../styled-components/modal.component'
import { ButtonComponent } from '../styled-components/button.component'
import { ViewButtonComponent } from '../styled-components/view.component'

// Redux
import { useDispatch } from 'react-redux'
import { editCustomers, deleteCustomer } from '../../redux/customerSlice'

//
import axios from '../../axios/axios'

export const EditModalComponent = (props) => {
  const dispatch = useDispatch()
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  const customerID = props.data.id
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

  const editCurrentCustomer = () => {
    axios
      .put(`/updateCustomer/${customerID}`, {
        first_name: customerFirst,
        last_name: customerLast,
        email: customerEmail,
        birthdate: customerBirthDate,
      })
      .then((response) => {
        console.log(response)
        dispatch(
          editCustomers({
            id: customerID,
            first_name: customerFirst,
            last_name: customerLast,
            email: customerEmail,
            birthdate: customerBirthDate,
          })
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteThatCustomer = (id) => {
    axios
      .delete(`/deleteCustomer/${id}`)
      .then((response) => {
        dispatch(deleteCustomer(id))
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
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
            editCurrentCustomer()
            props.onClose()
            cleanCustomer()
          }}
        >
          Edit Customer {props.data.id}
        </ButtonComponent>

        <ButtonComponent
          icon='account-remove'
          color='pink'
          mode='contained-tonal'
          onPress={() => {
            deleteThatCustomer(customerID)
            props.onClose()
            cleanCustomer()
          }}
        >
          Delete Customer {props.data.id}
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
