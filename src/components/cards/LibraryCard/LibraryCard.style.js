import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        width:130,
        height:180,
        //borderWidth:1,
        borderRadius:30,
        //justifyContent:"center",
        alignItems:"center",
        margin:5,
        padding:5,
        backgroundColor:color.brown
    },
    img_container:{
        marginTop:5,
        width:100,
        height:120,
    },
    img:{
        width:"100%",
        height:"100%"
    },
    title:{
        fontFamily:"Pasifico-Regular",
        //backgroundColor:"red",
        margin:10,
        textAlign:"center",
        color:color.beige 
    }
})