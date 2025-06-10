import {
    type StyleProp,
    useColorScheme,
    type ViewStyle,
    View
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemeViewProps = {
    style?: StyleProp<ViewStyle>;
    safe?: boolean;
    children: React.ReactNode;
};

const ThemedView = ({style, safe = false, ...props}: ThemeViewProps) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    if (!safe) return (
        <View style={[{
            backgroundColor: theme.background,
        }, style]} {...props} />
    )

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                {
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedView;
