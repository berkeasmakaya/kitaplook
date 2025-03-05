import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styles from './ProfilePage.style';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import color from '../../styles/color';
import BookCard from '../../components/BookCard/BookCard';

const ReadBooks = () => (
  <View style={{flex:1,backgroundColor:color.blue, marginTop:10}}>
    <BookCard />
    <BookCard />
  </View>
);

const FavoriteBooks = () => (
  <View>
    <BookCard />
  </View>
);

const renderScene = SceneMap({
  read: ReadBooks,
  favorite: FavoriteBooks,
});

function ProfilePage(){
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'read', title: 'Okunanlar' },
    { key: 'favorite', title: 'Favoriler' },
  ]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile_img_container}>
        <Image 
          source={require('../../assets/avatar_new.png')}
          resizeMode='cover'
          style={styles.profile_img}
        />
      </TouchableOpacity>
      <Text style={styles.user_info}>Berke Asmakaya</Text> 
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width}}
        options={{
          
        }}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            activeColor={color.darkBrown}
            inactiveColor={color.lightBrown}
          />
        )}
      />
    </View>
  )
}

export default ProfilePage