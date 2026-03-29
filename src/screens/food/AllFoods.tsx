import { View, Text } from 'react-native'
import React from 'react'

export default function AllFoods({ route }: any) {
  const { type } = route.params;
  return (
    <View>
      <Text>{type}</Text>
    </View>
  )
}
