import { View, Text, Image, ScrollView, Animated } from 'react-native'
import {React, useRef, useState} from 'react'
import PostCard from '../../components/cards/PostCard/PostCard';
import styles from './MainPage.style'
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import PostModal from '../../components/modals/PostModal/PostModal';

function MainPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const scrollY = useRef(new Animated.Value(0)).current; // Kaydırma değerini takip etmek için Animated Value oluşturduk
  // Opacity değerini belirleyen interpolasyon
  const buttonOpacity = scrollY.interpolate({
    inputRange: [0, 200],  // 0px -> Tam opak, 200px -> Şeffaflaşmaya başlıyor
    outputRange: [1, 0.25],   // 1 -> Tam görünür, 0.25 -> Tam şeffaf
    extrapolate: 'clamp',  // Değerin 0 ile 1 arasında kalmasını sağlıyor
  });

 
  
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16} // Performans için 16ms throttle ayarı
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Animated.ScrollView>
      <Animated.View style={[styles.btn_container, { opacity: buttonOpacity }]}>
        <FloatingButton onPress={()=>setIsModalVisible(true)}/>
      </Animated.View>
      <PostModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  )
}

export default MainPage;