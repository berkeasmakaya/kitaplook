import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from './Input.style';
import color from "../../styles/color";


const Input = ({value, onChangeText, placeholder, autoCapitalize, onBlur,isSecure, keyboardType}) => {
    const [isFocused, setIsFocused] = useState(false)
    return(
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, isFocused && {borderColor:color.blue, borderWidth:2}]}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>{
                    setIsFocused(false),
                    onBlur
                }}
                secureTextEntry={isSecure}
                keyboardType={keyboardType}
            /> 
        </View>
    )
}

export default Input;