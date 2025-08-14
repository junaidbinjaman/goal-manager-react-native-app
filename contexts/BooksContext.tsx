import {createContext, useState, ReactNode, useEffect} from 'react';
import {databases} from '../Lib/appwrite';
import {ID, Permission, Query, Role, Models} from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';

type BooksContextTypes = {
    books: Models.DefaultDocument[];
    fetchBooks: () => Promise<void>;
    fetchBooksById: (id: string) => Promise<void>;
    createBook: (data: any) => Promise<void>;
    deleteBook: (id: string) => Promise<void>;
};


const DATABASE_ID = '689bd81800325e218ae5';
const COLLECTION_ID = '689bd83d000f710bb671';

export const BooksContext = createContext<BooksContextTypes | null>(null);

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [books, setBooks] = useState<Models.DefaultDocument[]>([]);
    const { user } = useUser()

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userid', user?.$id)
                ]
            )

            setBooks(response.documents);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    async function fetchBooksById(id: string) {
        try {
            //
        } catch (error: any) {
            console.log(error.message);
        }
    }

    async function createBook(data: {
        title: string;
        author: string;
        description: string;
    }) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userid: user?.$id},
                [
                    Permission.read(Role.user(user?.$id)),
                    Permission.update(Role.user(user?.$id)),
                    Permission.delete(Role.user(user?.$id)),
                ]
            );

            setBooks([...books, newBook]);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    async function deleteBook(id: string) {
        try {
            //
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (user) {
            fetchBooks();
        } else {
            setBooks([]);
        }
    }, [user])

    return (
        <BooksContext.Provider
            value={{books, fetchBooks, deleteBook, createBook, fetchBooksById}}
        >
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
