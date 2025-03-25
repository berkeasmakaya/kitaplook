import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container: {
    },
    header: {
        backgroundColor: color.beige,
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row",
        padding: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        color: color.brown,
        paddingVertical: 15,
        marginLeft: 10,
        fontFamily: "Pacifico-Regular",
    },
    scroll: {
        paddingHorizontal: 10,
    },
    content: {
        marginLeft: 10,
        fontFamily: "Pacifico-Regular",
        fontSize: 16,
        marginTop: 5,
        color: color.darkBrown
    },
    arrow: {
        marginRight: 10,
    },
})