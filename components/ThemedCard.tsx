import {Text, View, useColorScheme, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';

const ThemedCard = ({style, ...props}: {style?: Object | undefined, children: React.ReactNode}) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    return (
        <View
            style={[
                {
                    backgroundColor: theme.uiBackground,
                },
                styles.card,
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4
    }
})
