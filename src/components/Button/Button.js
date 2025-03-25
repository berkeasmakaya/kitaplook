import React from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './Button.style';
import color from "../../styles/color";


const Button = ({onPress,text,loading, theme="primary"}) => {
    return(
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            {
                loading ? (
                    <ActivityIndicator color={color.white} />
                ) : (
                    <Text style={styles[theme].text}>{text}</Text>
                )
            }
        </TouchableOpacity>
    )
}

export default Button;