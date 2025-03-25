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
    user_info_box:{
        marginTop:10,
        alignItems:"center"
    },
    user_name:{
        fontSize:20,
        color:color.darkBrown,
        fontFamily:"Pacifico-Regular",
    },
    user_username:{
        fontSize:15,
        color:color.brown,
        fontFamily:"Pacifico-Regular",
        marginBottom:15,
    },
    tabBar: {
        height:50,
        backgroundColor:color.beige
    },
    indicator: {
       backgroundColor: color.lightBrown,  
    },
})