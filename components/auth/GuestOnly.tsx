import {Text} from 'react-native';
import {useEffect, type ReactNode} from 'react';
import {useUser} from '../../hooks/useUser';
import {useRouter} from 'expo-router';
import ThemedLoader from '../themedLoader';

const GuestOnly = ({children}: {children: ReactNode}) => {
    const {user, authCheck} = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authCheck && user !== null) {
            router.replace('/profile');
        }
    }, [user, authCheck]);

    if (!authCheck || user) {
        return <ThemedLoader />;
    }

    return children;
};

export default GuestOnly;
