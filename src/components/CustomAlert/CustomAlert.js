import React, { useState } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import styles from './CustomAlert.style';

const CustomAlert = ({ isVisible, onClose, title, message, onConfirm }) => {
    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            animationInTiming={300}
            animationOutTiming={300}
            backdropOpacity={0.5}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelText}>İptal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                        <Text style={styles.confirmText}>Tamam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomAlert;