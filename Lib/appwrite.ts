import { Client, Account, Avatars, Databases } from 'react-native-appwrite';
// Init your React Native SDK
export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('6893f08e0002e74f04db') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
