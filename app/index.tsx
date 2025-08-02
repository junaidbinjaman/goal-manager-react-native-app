import {Text, View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router';
import ThemedView from '../components/themedView';

import ThemedLogo from '../components/themedLogo';
import Spacer from '../components/spacer';
import ThemedText from '../components/themedText';

function Home() {
    return (
        <>
            <ThemedView style={style.container}>
                <ThemedLogo />
                <Spacer height={20} />

                <ThemedText title={true} style={style.title}>
                    The number one
                </ThemedText>

                <Spacer height={10} />
                <ThemedText title={false} style={{marginBottom: 50}}>
                    Reading the app list
                </ThemedText>

                <View style={style.card}>
                    <Text>Hello, This is a card..</Text>
                </View>

                <Link style={style.link} href='/login'>
                    <ThemedText>Login Page</ThemedText>
                </Link>

                <Link style={style.link} href='/register'>
                    <ThemedText>Register Page</ThemedText>
                </Link>
            </ThemedView>
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
