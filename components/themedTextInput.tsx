import {StyleProp, TextInput, TextInputProps, TextStyle, useColorScheme} from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

type ThemedTextInputProps = TextInputProps & {
    style?: StyleProp<TextStyle>
}

const ThemedTextInput = ({style, ...props}: ThemedTextInputProps) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    return (
        <TextInput
        style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6
            },
            style
        ]}
        {...props}
        />
    );
};

export default ThemedTextInput;
