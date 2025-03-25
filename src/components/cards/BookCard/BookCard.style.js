import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:10,
        backgroundColor:color.lightBrown,
        borderColor:color.lightBrown,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    inner_container:{
        flexDirection:"row"
    },
    img_container:{
        width:100,
        height:100,
    },
    img:{
        width:"100%",
        height:"100%"
    },
    info_container:{
        justifyContent:"center",
    },
    book_name:{
        fontSize:25,
        fontFamily:"Pacifico-Regular",
        color:color.white,
    },
    author:{
        color:color.white,
        fontSize:15,
        fontFamily:"Pacifico-Regular",
    },
    btn_container:{
    },
    btn:{     
    }
})