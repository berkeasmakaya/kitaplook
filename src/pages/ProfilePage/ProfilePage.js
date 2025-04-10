import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styles from './ProfilePage.style';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import color from '../../styles/color';
import BookCard from '../../components/cards/BookCard/BookCard';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';

const ReadBooks = () => (
  <View style={{ flex: 1, backgroundColor: color.blue, marginTop: 10 }}>
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

function ProfilePage({navigation}) {
  const userInfo = useSelector(state=>state.userInfo.userInfo)
  
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'read', title: 'Okunanlar' },
    { key: 'favorite', title: 'Favoriler' },
  ]);
  const [profileImage, setProfileImage] = useState(null);
  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri); // Seçilen fotoğrafı kaydet
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile_img_container} onPress={selectImage}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../../assets/avatar_new.png')}
          //source={require('../../assets/avatar_new.png')}
          resizeMode='cover'
          style={styles.profile_img}
        />
      </TouchableOpacity>
      <View style={styles.user_info_box}>
        <Text style={styles.user_name}>{userInfo.firstname} {userInfo.lastname}</Text>
        <Text style={styles.user_username}>@{userInfo.username}</Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
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