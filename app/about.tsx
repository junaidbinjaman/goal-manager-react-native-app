import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

import {Colors} from '../constants/Colors';
import ThemedView from '../components/themedView';
import ThemedText from '../components/ThemedText';

const About = () => {
    const colorScheme = useColorScheme();

    return (
        <ThemedView
            style={[style.container]}
        >
            <ThemedText style={style.title}>Contact Page</ThemedText>

            <Link style={style.link} href='/'>
                <ThemedText>Home</ThemedText>
            </Link>
        </ThemedView>
    );
};

export default About;

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
