import React from 'react'

import { DataTable } from 'react-native-paper'
import { Text, View, FlatList, ScrollView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

//
import { ViewScreenComponent, ViewCardComponent } from '../styled-components/view.component'

export const TableComponent = () => {
  const customers = useSelector((state) => state.customers.customers)

  return (
    <ViewScreenComponent>
      <ScrollView>
        {customers.map((customer) => (
          <ViewCardComponent key={customer.id}>
            <Text>{`${customer.first_name} ${customer.last_name}`}</Text>
            <Text>{customer.email}</Text>
            <Text>{customer.birthdate}</Text>
          </ViewCardComponent>
        ))}
      </ScrollView>
    </ViewScreenComponent>
  )
}
