import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

import ThemedView from '../components/themedView';
import ThemedText from '../components/themedText';

const Contact = () => {
    return (
        <>
            <ThemedView
            style={[style.container]}
        >
            <ThemedText style={style.title}>Contact Page</ThemedText>

            <Link style={style.link} href='/'>
                <ThemedText>Home</ThemedText>
            </Link>
        </ThemedView>
        </>
    );
};

export default Contact;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
