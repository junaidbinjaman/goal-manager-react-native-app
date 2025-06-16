import {
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

import Spacer from '../../components/spacer';
import ThemedView from '../../components/themedView';
import ThemedText from '../../components/themedText';
import {Dispatch, SetStateAction, useState} from 'react';
import ThemedTextInput from '../../components/themedTextInput';
import ThemedButton from '../../components/themedButton';
import {useBooks} from '../../hooks/useBooks';
import {router} from 'expo-router';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const {createBook} = useBooks();

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return;

        setLoading(true);

        await createBook({title, description, author});

        setTitle('');
        setAuthor('');
        setDescription('');

        router.replace('/books');

        setLoading(false);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText>Add a New Book</ThemedText>

                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder='Book Title'
                    value={title}
                    onChangeText={setTitle}
                />

                <ThemedTextInput
                    style={styles.input}
                    placeholder='Author'
                    value={author}
                    onChangeText={setAuthor}
                />

                <ThemedTextInput
                    style={styles.multiline}
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />

                <Spacer />
                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{color: '#fff'}}>
                        {loading ? 'Saving...' : 'Create Book'}
                    </Text>
                </ThemedButton>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },

    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40,
        marginVertical: 10,
    },

    multiline: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40,
        minHeight: 100,
    },
});
