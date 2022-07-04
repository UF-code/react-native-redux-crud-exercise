import React from 'react'

import { DataTable } from 'react-native-paper'
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

//
import {
  ViewScreenComponent,
  ViewCardComponent,
  ViewInfoComponent,
} from '../styled-components/view.component'
import { TextComponent } from '../styled-components/text.component'

export const TableComponent = () => {
  const customers = useSelector((state) => state.customers.customers)

  return (
    <ScrollView>
      <ViewScreenComponent>
        {customers.map((customer) => (
          <ViewCardComponent key={customer.id}>
            <TouchableOpacity
              onPress={() => {
                console.log(customer.id)
              }}
            >
              <ViewInfoComponent>
                <TextComponent>First Name: {`${customer.first_name.toUpperCase()}`}</TextComponent>
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
  )
}
