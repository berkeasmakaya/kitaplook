import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:color.beige,
        flex:1,
    },
    profile_img_container:{
        width: 100, 
        height: 100,
        borderRadius: 50, 
        overflow: "hidden", 
        marginRight: 10,
        alignItems: "center",
        borderWidth:2,
        marginVertical:20,
        borderColor:color.lightBrown,
    },
    profile_img:{
        width:"100%",
        height:"100%"
    },
    user_info:{
        marginBottom:15,
        fontSize:20,
        color:color.darkBrown,
        fontFamily:"Pacifico-Regular",
    },
    tabBar: {
        height:50,
        backgroundColor:color.beige
    },
    indicator: {
       backgroundColor: color.lightBrown,  
    },
})