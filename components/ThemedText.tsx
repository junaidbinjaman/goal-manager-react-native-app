import {Text, useColorScheme} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

type ThemedTextProps = {
    style?: Object | undefined;
    title?: boolean;
    children: React.ReactNode;
};

const ThemedText = ({style, title = false, ...props}: ThemedTextProps) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    const textColor = title ? theme.title : theme.text;

    return (
        <Text
            style={[
                {
                    color: textColor,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedText;
