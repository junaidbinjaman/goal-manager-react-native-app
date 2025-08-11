import {
    SafeAreaView,
    type StyleProp,
    useColorScheme,
    type ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

type ThemeViewProps = {
    style?: StyleProp<ViewStyle>;
    safe?: boolean;
    children: React.ReactNode;
};

const ThemedView = ({style, safe = false, ...props}: ThemeViewProps) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    return (
        <SafeAreaView
            style={[
                {
                    backgroundColor: theme.background,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedView;
