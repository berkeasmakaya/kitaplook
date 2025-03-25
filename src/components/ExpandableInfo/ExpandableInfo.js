import React, { useState, useRef, useEffect } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from "../../styles/color";
import styles from './ExpandableInfo.style'
import { ScrollView } from "react-native-gesture-handler";

const ExpandableInfo = ({ title, content}) => {
    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0);

    const toggleExpand = () => {
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false
        }).start(() => setExpanded(!expanded))
    }
    const onContentLayout = (e) => {
        const { height } = e.nativeEvent.layout;
        setContentHeight(height);  // İçeriğin gerçek yüksekliğini al
    };

    const heightInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight], // Açılma yüksekliği
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} activeOpacity={0.8} style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Icon name={expanded ? "chevron-up" : "chevron-down"} size={30} color={color.brown} />
            </TouchableOpacity>

            
            <Animated.View style={[styles.contentContainer, { height: heightInterpolation }]}>
                {expanded && (
                    <ScrollView style={styles.scroll}>
                        <Text onLayout={onContentLayout} style={styles.content}>{content}</Text>
                    </ScrollView>
                )}
            </Animated.View>
        </View>

    )

}

export default ExpandableInfo;