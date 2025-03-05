import React, { useState } from "react";
import {Image, Text, TouchableOpacity, View, Button } from "react-native";
import styles from './BookCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "../../styles/color";
//import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import CustomAlert from "../CustomAlert/CustomAlert";

const BookCard = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked)
    }
    const handleDelete = () => {
        setAlertVisible(true);
    }
    const confirmDelete = () => {
        console.log("Kitap silindi!");
        setAlertVisible(false);
    };
    return (
        <>
            <TouchableOpacity style={styles.container}>
                <View style={styles.inner_container}>
                    <View style={styles.img_container}>
                        <Image
                            source={require('../../assets/kitap_ornek.jpg')}
                            style={styles.img}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.info_container}>
                        <Text style={styles.book_name}>Satranç</Text>
                        <Text style={styles.author}>Stefan Zweig</Text>
                    </View>
                </View>

                <View style={styles.btn_container}>
                    <TouchableOpacity style={styles.btn} onPress={handleDelete}>
                        <Icon name="delete-circle-outline" size={50} color={color.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={handleLike}>
                        <Icon name="heart-circle-outline" size={50} color={isLiked ? color.darkBrown : color.white} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <CustomAlert
                isVisible={alertVisible}
                onClose={() => setAlertVisible(false)}
                title="Kitabı Sil"
                message="Bu kitabı gerçekten silmek istiyor musunuz?"
                onConfirm={confirmDelete}
            />
        </>

    )
}

export default BookCard;