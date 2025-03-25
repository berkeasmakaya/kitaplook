import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:color.cream,
        borderWidth:1,
        borderColor:color.lightBrown
    },
    header_container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    },
    profil_img_container:{
        width: 50, 
        height: 50,
        borderRadius: 50, 
        overflow: "hidden", 
        marginRight: 10,
        alignItems: "center",
        borderWidth:1,
        borderColor:color.lightBrown,
        backgroundColor:color.beige
    },
    profil_img:{
        width: "100%", 
        height: "100%",
    },
    bottom_container:{
        marginTop:20,
        flexDirection:"row",
    },
    like_button:{
        margin:10
    },
    dislike_button:{
        margin:10
    },
    user_name:{
        color:color.brown,
        fontFamily:"Pacifico-Regular",
        fontSize:18
    }
})