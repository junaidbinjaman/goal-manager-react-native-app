import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ThemedView from '../../../components/themedView';
import ThemedText from '../../../components/themedText';
import {useLocalSearchParams} from 'expo-router';
import {useBooks} from '../../../hooks/useBooks';
import {type BookDetailDataType} from '../../../contexts/BooksContext';
import Spacer from '../../../components/spacer';
import ThemedCard from '../../../components/themedCard';
import ThemedLoader from '../../../components/themedLoader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const BookDetails = () => {
    const [book, setBooks] = useState<BookDetailDataType>({
        title: '',
        author: '',
        description: '',
        id: '',
    });
    const {id} = useLocalSearchParams();
    const {fetchBooksById} = useBooks();

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBooksById(id);
            setBooks(bookData);
        }

        loadBook();
    }, [id]);

    if (!book) {
        return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <ThemedLoader />
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book Description</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    );
};

export default BookDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: 20
    },

    title: {

    }
});
