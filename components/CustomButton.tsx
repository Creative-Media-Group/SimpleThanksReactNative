import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    onLongPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    mymarginHorizontal?: number
}
const CustomButton = ({ onPress, title, textStyles = "", mymarginHorizontal = 20, onLongPress }: CustomButtonProps) => {
    const styles = StyleSheet.create({
        touchableopacity: { backgroundColor: 'red', borderRadius: 16, minHeight: 62, justifyContent: 'center', alignItems: 'center' },
        text: {
            fontWeight: '600',
            fontSize: 18,
        },
    })
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={
                [
                    styles.touchableopacity,
                    { marginHorizontal: mymarginHorizontal }
                ]
            }
            onPress={onPress}
            onLongPress={async () => { await onLongPress }}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton