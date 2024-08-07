import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface CustomButtonProps {
    Icon: ReactNode;
    text: string;
    style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ Icon, text, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]}>
            {Icon}
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#FAFBFC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E1E1E3',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#38383E',
        marginLeft: 5,
    },
});

export default CustomButton;
