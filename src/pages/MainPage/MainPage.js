import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '../../components/PostCard/PostCard';
import styles from './MainPage.style'

function MainPage() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    </View>
  )
}

export default MainPage;