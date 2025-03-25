import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        backgroundColor:color.beige,
        flex:1,
    },
    header_container:{
        flexDirection:"row",
        alignItems:"center"
    },
    input_container:{
        flex:1,
        //backgroundColor:"red"
    },
    btn_container:{
        height:46,
        justifyContent:"center",
        alignItems:"center",
        marginRight:5,
        padding:10,
        backgroundColor:color.brown,
        borderRadius:20,
    }
})