import React, { useState } from 'react'

import { ScrollView, TouchableOpacity } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Components
import { EditModalComponent } from './edit.modal.component'

//
import {
  ViewScreenComponent,
  ViewCardComponent,
  ViewInfoComponent,
} from '../styled-components/view.component'
import { TextComponent } from '../styled-components/text.component'

export const TableComponent = (props) => {
  // const dispatch = useDispatch()
  const customers = useSelector((state) => state.customers.customers)
  // const tmpCustomer = useSelector((state) => state.customers.tmpCustomer)
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState(null)

  return (
    <>
      <ScrollView>
        <ViewScreenComponent>
          {customers.map((customer) => (
            <ViewCardComponent key={customer.id}>
              <TouchableOpacity
                onPress={() => {
                  props.disableButton()
                  console.log(
                    `ID: ${customer.id} User: ${customer.first_name} ${customer.last_name} is clicked!`
                  )
                  setShow(true)

                  setModalData(customer)
                  // console.log(customer)
                }}
              >
                <ViewInfoComponent>
                  <TextComponent>
                    First Name: {`${customer.first_name.toUpperCase()}`}
                  </TextComponent>
                  <TextComponent>Last Name: {`${customer.last_name.toUpperCase()}`}</TextComponent>
                </ViewInfoComponent>

                <ViewInfoComponent>
                  <TextComponent>Email: {customer.email}</TextComponent>
                </ViewInfoComponent>
                <ViewInfoComponent>
                  <TextComponent>Birthdate: {customer.birthdate}</TextComponent>
                </ViewInfoComponent>

                <TextComponent>Created At</TextComponent>
                <TextComponent>
                  Date: {customer.createdAt.split('T')[0]} Time:{' '}
                  {customer.createdAt.split('T')[1].split('.')[0]}
                </TextComponent>
                <TextComponent>Updated At</TextComponent>
                <TextComponent>
                  Date: {customer.updatedAt.split('T')[0]} Time:{' '}
                  {customer.updatedAt.split('T')[1].split('.')[0]}
                </TextComponent>
              </TouchableOpacity>
            </ViewCardComponent>
          ))}
        </ViewScreenComponent>
      </ScrollView>

      {modalData && (
        <EditModalComponent
          data={modalData}
          show={show}
          onClose={() => {
            setShow(false)
            props.enableButton()
          }}
        />
      )}
    </>
  )
}
