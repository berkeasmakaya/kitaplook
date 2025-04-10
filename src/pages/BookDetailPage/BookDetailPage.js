import React, {useState} from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from './BookDetailPage.style';
import ExpandableInfo from "../../components/ExpandableInfo/ExpandableInfo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "../../styles/color";

function BookDetailPage({ route }) {
    const { book } = route.params;
    const image = book.volumeInfo.imageLinks.thumbnail;  
    const secureImage = image?.startsWith("http:") ? image.replace("http:", "https:") : image;
    const imageSource = secureImage ? { uri: secureImage } : { uri: defaultImage };
    const [isLiked, setIsLiked] = useState(false);
    const [isReaded, setIsReaded] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked)
    }
    const handleRead = () => {
        setIsReaded(!isReaded)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scroll_container}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.img_container}>
                    <Image
                        source={imageSource}
                        style={styles.img}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.title_container}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{book.volumeInfo.authors?.join(", ")}</Text>
                </View>
                <View style={styles.info_container}>
                    <ExpandableInfo title="Kategori" content={book.volumeInfo.categories || "Kategori bilgisi bulunmuyor" } />
                    <ExpandableInfo title="Sayfa Sayısı" content={book.volumeInfo.pageCount || "Sayfa sayısı bilgisi bulunmuyor" } />
                    <ExpandableInfo title="Açıklama" content={book.volumeInfo.description || "Açıklama bilgisi bulunmuyor" } />
                </View>
                <View style={styles.btn_container}>
                    <TouchableOpacity 
                        style={[styles.btn_wrapper, { backgroundColor: isLiked ? color.beige : color.lightBrown }]} 
                        onPress={handleLike}>
                        <Icon name="heart" size={40} color={isLiked ? color.darkRed : color.beige} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.btn_wrapper, { backgroundColor: isReaded ? color.beige : color.lightBrown }]}
                        onPress={handleRead}>
                        <Icon name="check-bold" size={40} color={isReaded ? color.darkGreen : color.beige}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default BookDetailPage;