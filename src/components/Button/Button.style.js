import { StyleSheet } from "react-native";
import color from "../../styles/color";

const base_style = StyleSheet.create({
    container:{
        margin:10,
        padding:15,
        borderRadius:10,
    },
    text:{
        fontSize:17,
        textAlign:"center",
        fontFamily:"Pacifico-Regular",
    }
})

export default {
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.brown,
        },
        text:{ 
            ...base_style.text,
            color:color.white
        }

    }),
    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.beige,
            borderWidth:1,
            borderBlockColor:color.brown
        },
        text:{
            ...base_style.text,
            color:color.brown
        }
    }),
    third:StyleSheet.create({
        container:{
            backgroundColor:color.beige,
            margin:10,
            paddingVertical:5,
            paddingHorizontal:10,
            borderRadius:10,
            borderWidth:1,
            borderColor:color.lightBrown,
            marginLeft:"5%"
        },
        text:{
            fontWeight:"600",
            color:color.brown,
            fontFamily:"Pacifico-Regular",
        }
    }),
}