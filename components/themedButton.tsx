import { StyleSheet, View, Pressable, type StyleProp, type ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

type ThemedButtonProps = {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    [key: string]: any;
};

const ThemedButton = ({ style, children, ...props }: ThemedButtonProps) => {

    return (
        <View>
            <Pressable
                style={({ pressed }) => [
                    styles.btn,
                    pressed ? styles.pressed : null,
                    style,
                ]}
                {...props}
            >
                {children}
            </Pressable>
        </View>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
});
