import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Contact = () => {
    return (
        <>
            <View style={style.container}>
                <Text style={style.title}>Contact Page</Text>

                <Link style={style.link} href='/'>
                    Home
                </Link>
            </View>
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
