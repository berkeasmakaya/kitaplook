import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.beige
    },
    scroll_container:{
        flexGrow:1,
    },
    img_container:{
        height:200,
        padding:10,
    },
    img:{
        width:"100%",
        height:"100%"
    },
   
    title_container:{
        marginTop:10,
    },
    title:{
        textAlign:"center",
        fontFamily:"Pacifico-Regular",
        color:color.darkBrown,
        fontSize:20,
    },
    author:{
        textAlign:"center",
        fontFamily:"Pacifico-Regular",
        fontSize:15,
        color:color.brown
    }, 
    info_container:{
        flex: 1,
        marginBottom: 15,
    },
    btn_container:{
        alignItems:"center",
        flexDirection:"row",
    },
    btn_wrapper:{
        flex:1,
        alignItems:"center",
        borderRadius:10,
        backgroundColor:color.lightBrown,
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:color.lightBrown
    }
})