import { View, Text, SafeAreaView , FlatList, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import styles from './SearchPage.style'
import Config from 'react-native-config'
import Button from '../../components/Button/Button'
import LibraryCard from '../../components/cards/LibraryCard/LibraryCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../styles/color'
import Loading from '../../components/Loading/Loading'

const SearchPage = ({navigation}) => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!searchText.trim()) {
      return;
    }
    setLoading(true);
    
    try {
      const response = await fetch(
        `${Config.BASE_URL}${searchText}${Config.PRINT_TYPE}&key=${Config.API_KEY}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.log("hata: ",error)
    } finally{
      setLoading(false);
      setSearchText('')
    }
  }

  const goToDetailPage = (book) => {
    navigation.navigate("BookDetailPage", {book});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.input_container}>
          <Input placeholder="Arayınız.." value={searchText} onChangeText={setSearchText}/>
        </View>
        <TouchableOpacity style={styles.btn_container} onPress={fetchBooks}>
          <Icon name="magnify" color={color.beige} size={30}/>
        </TouchableOpacity>
      </View>
      
      {loading && <Loading />}
      <FlatList    
        numColumns={2}
        data={books}
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => (
          <View style={{ flex:1, justifyContent:"space-between", alignItems:"center", paddingVertical:10}}>
            <LibraryCard 
              onPress={()=>goToDetailPage(item)}
              image={item.volumeInfo.imageLinks.smallThumbnail} 
              title={item.volumeInfo.title} 
            />
          </View>
        )} 
      />
    </SafeAreaView>
  )
}

export default SearchPage






// <View>
          //   <Text>{item.volumeInfo.title}</Text>
          //   <Text>{item.volumeInfo.authors?.join(", ") || "Bilinmeyen yazar"}</Text>
          // </View>