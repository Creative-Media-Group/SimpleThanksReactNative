import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    mymarginHorizontal?: number
}
const CustomButton = ({ onPress, title, textStyles = "", mymarginHorizontal = 20 }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7} style={[styles.touchableopacity, { marginHorizontal: mymarginHorizontal }]} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchableopacity: { backgroundColor: 'red', borderRadius: 16, minHeight: 62, justifyContent: 'center', alignItems: 'center' },
    text: {
        fontWeight: '600',
        fontSize: 18,
    },
})
export default CustomButton