import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import {Colors} from '../constants/Colors';

const About = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors : Colors['light'];

  return (
    <View style={[style.container, {backgroundColor: theme.background}]}>
      <Text style={style.title}>About Page</Text>

      <Link style={style.link} href='/'>Home</Link>
    </View>
  )
}

export default About

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
        borderBottomWidth: 1
    }
});