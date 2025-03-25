import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
    },
    text:{
        marginLeft:5,
        color:color.darkRed,
        fontSize:17,
        fontFamily:"Pacifico-Regular"
    }
})