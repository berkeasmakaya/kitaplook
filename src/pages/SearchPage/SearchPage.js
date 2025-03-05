import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Input from '../../components/Input/Input'
import styles from './SearchPage.style'

const SearchPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="Arayınız.."/>
    </SafeAreaView>
  )
}

export default SearchPage