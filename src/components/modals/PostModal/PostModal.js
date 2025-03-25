import {React, useState} from "react";
import { TextInput, View, TouchableOpacity, Text, SafeAreaView, Image } from "react-native";
import Modal from "react-native-modal";
import styles from './PostModal.style';
import color from "../../../styles/color";
import Button from "../../Button/Button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchImageLibrary } from 'react-native-image-picker';

const PostModal = ({ isVisible, onClose }) => {
    
    const [postImage, setPostImage] = useState(null);
    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
          if (!response.didCancel && !response.error && response.assets.length > 0) {
            setPostImage(response.assets[0].uri); // Seçilen fotoğrafı kaydet
          }
        });
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            style={styles.modal}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.input_container}>
                    <View style={styles.header}>
                        <Button text="İptal Et" theme="third" onPress={onClose}/>
                        <Button text="Gönder" theme="third"/>
                    </View>
                    {
                        postImage && (
                            <Image 
                                source={{uri:postImage}}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        )
                    }
                    <TextInput 
                        placeholder="Bugün kitaplarla aran nasıl..."
                        style={styles.input}
                        multiline
                    />
                    <TouchableOpacity style={styles.cam_container} onPress={selectImage}>
                        <Icon name="camera" size={30} color={color.brown}/> 
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );

}

export default PostModal