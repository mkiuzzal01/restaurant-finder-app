import { View, Text } from 'react-native'
import React from 'react'

export default function Private({children}: {children: React.ReactNode}) {
  const isAuth = false;
  return (
    <View>
      {children}
    </View>
  )
}
