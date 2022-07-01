import React from 'react'

import { DataTable } from 'react-native-paper'
import { Text, View, FlatList, ScrollView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

export const TableComponent = () => {
  const customers = useSelector((state) => state.customers.customers)

  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Birthdate</DataTable.Title>
        </DataTable.Header>

        {customers.map((customer) => (
          <DataTable.Row key={customer.id}>
            <DataTable.Cell>{`${customer.first_name} ${customer.last_name}`}</DataTable.Cell>
            <DataTable.Cell>{customer.email}</DataTable.Cell>
            <DataTable.Cell>{customer.birthdate}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  )
}
