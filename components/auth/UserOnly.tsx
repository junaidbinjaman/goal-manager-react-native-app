import {useEffect, type ReactNode} from 'react';
import {useUser} from '../../hooks/useUser';
import {useRouter} from 'expo-router';
import ThemedLoader from '../themedLoader';

const UserOnly = ({children}: {children: ReactNode}) => {
    const {user, authCheck} = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authCheck && user === null) {
            router.replace('/login');
        }
    }, [user, authCheck]);

    if (!authCheck || !useUser) {
        return <ThemedLoader />;
    }

    return children;
};

export default UserOnly;
