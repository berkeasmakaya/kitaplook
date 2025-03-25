import React from "react";
import { TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "../../styles/color";
import styles from './FloatingButton.style';

const FloatingButton = ({onPress}) => {
    return(
       <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name="plus" size={30} color={color.beige}/>
       </TouchableOpacity>
    )
}

export default FloatingButton