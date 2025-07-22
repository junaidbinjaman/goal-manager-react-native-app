import {Text, View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router';

import Logo from '../assets/img/logo_light.png';

function Home() {
    return (
        <>
            <View style={style.container}>
                <Image source={Logo} />

                <Text style={style.title}>The number one</Text>
                <Text style={{marginTop: 10, marginBottom: 50}}>
                    Reading the app list
                </Text>

                <View style={style.card}>
                    <Text>Hello, This is a card..</Text>
                </View>

                <Link style={style.link} href='/about'>
                    About
                </Link>

                <Link style={style.link} href='/contact'>
                    Contact
                </Link>
            </View>
        </>
    );
}

export default Home;

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

    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
