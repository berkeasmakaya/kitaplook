import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './PostCard.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../../styles/color'
import { useSelector } from 'react-redux'

const PostCard = () => {
    const userInfo = useSelector(state=>state.userInfo.userInfo)
    const [likedState, setLikedState] = useState(null);
    const handleLike = () => {
        setLikedState(likedState === 'like' ? null : 'like')
    }
    const handleDislike = () => {
        setLikedState(likedState === "dislike" ? null : "dislike")
    }
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <View style={styles.profil_img_container}>
                    <Image 
                        source={require('../../../assets/avatar_new.png')} 
                        style={styles.profil_img}         
                        resizeMode='cover'
                    />
                </View>
                <Text style={styles.user_name}>{userInfo.username}</Text>
            </View>

            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            <View style={styles.bottom_container}>
                <TouchableOpacity style={styles.like_button} onPress={handleLike}>
                    <Icon name="thumb-up" size={30} color={likedState === 'like' ? color.darkGreen : color.lightGreen}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dislike_button} onPress={handleDislike}>
                    <Icon name="thumb-down" size={30} color={likedState === 'dislike' ? color.darkRed : color.lightRed}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostCard