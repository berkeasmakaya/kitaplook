import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from './Input.style';
import color from "../../styles/color";



const Input = ({value, onChangeText, placeholder, autoCapitalize, onBlur,isSecure, keyboardType}) => {
    const [isFocused, setIsFocused] = useState(false)
    return(
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, isFocused && {borderColor:color.lightBrown, borderWidth:2}]}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor={color.brown}
                value={value}
                onChangeText={onChangeText}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>{
                    setIsFocused(false),
                    onBlur
                }}
                secureTextEntry={isSecure}
                keyboardType={keyboardType}
                textContentType="none"
                autoComplete="false"
                onSubmitEditing={()=>onChangeText('')}
            /> 
        </View>
    )
}

export default Input;