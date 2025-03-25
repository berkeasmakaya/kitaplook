import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    main_container:{
        flex:1,
    },
    inner_container:{
        flex:1,
    },
    content_container:{
        flex:1,
    },
    content_box:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderRadius:20,
        padding:10,
        marginBottom:10,
        backgroundColor:color.brown
    },
    content_text:{
        marginLeft:10,
        color:color.beige,
        fontFamily:"Pacifico-Regular",
        fontSize:19,
    },
    bottom_container:{
        marginBottom: 15, 
        marginLeft: 10
    }

})