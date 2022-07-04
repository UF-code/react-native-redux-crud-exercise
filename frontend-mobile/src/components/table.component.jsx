import React from 'react'

import { DataTable } from 'react-native-paper'
import { Text, View, FlatList, ScrollView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

export const TableComponent = () => {
  const customers = useSelector((state) => state.customers.customers)

  return (
    <ScrollView>
      {customers.map((customer) => (
        <View key={customer.id}>
          <Text>{`${customer.first_name} ${customer.last_name}`}</Text>
          <Text>{customer.email}</Text>
          <Text>{customer.birthdate}</Text>
        </View>
      ))}
    </ScrollView>
  )
}
