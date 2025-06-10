import { Client, Account, Avatars } from 'react-native-appwrite';
// Init your React Native SDK
export const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;

export const account = new Account(client);
export const avatars = new Account(client);
