import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container: {
        backgroundColor: color.white,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        color: color.darkBrown,
        marginBottom: 10,
        fontFamily:"Pacifico-Regular"
      },
      message: {
        fontSize: 16,
        color: color.brown,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily:"Pacifico-Regular"
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cancelButton: {
        backgroundColor: color.lightBrown,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
      },
      confirmButton: {
        backgroundColor: color.brown,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
      },
      cancelText: {
        color: color.white,
        fontSize: 16,
        fontFamily:"Pacifico-Regular"
      },
      confirmText: {
        color: color.white,
        fontSize: 16,
        fontFamily:"Pacifico-Regular"
      },
})