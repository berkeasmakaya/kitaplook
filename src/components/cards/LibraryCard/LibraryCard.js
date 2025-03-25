import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from './LibraryCard.style'

const LibraryCard = ({image, title, onPress}) => {
    
    const secureImage = image?.startsWith("http:") ? image.replace("http:", "https:") : image;
    const imageSource = secureImage ? { uri: secureImage } : { uri: defaultImage };

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.img_container}>
                <Image 
                    source={imageSource}
                    style={styles.img}
                    resizeMode="contain"
                    resizeMethod="auto"
                />
            </View>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LibraryCard