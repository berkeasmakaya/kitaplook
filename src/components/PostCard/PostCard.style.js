import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        backgroundColor:color.white,
        borderColor:color.blue
    },
    header_container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },
    profil_img:{
        borderWidth:1,
        borderRadius:50,
        padding:20,
        marginRight:10,
    },
    bottom_container:{
        marginTop:20,
        flexDirection:"row",
    }
})