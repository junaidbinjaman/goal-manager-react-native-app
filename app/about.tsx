import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={style.container}>
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