import {
    ActivityIndicator,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import ThemedView from './themedView';

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

    return (
        <ThemedView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color={theme.text} />
        </ThemedView>
    );
};

export default ThemedLoader;

const styles = StyleSheet.create({});
