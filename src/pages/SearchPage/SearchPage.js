import { View, Text } from 'react-native'
import React from 'react'
import Input from '../../components/Input/Input'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchPage = () => {
  return (
    <SafeAreaView>
      <Input placeholder="Arayınız.."/>
    </SafeAreaView>
  )
}

export default SearchPage